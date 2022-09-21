import { useState } from 'react';
import Head from 'next/head';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import User from '../../interfaces/User';
import { signInRequest } from '../../services/signIn';
import { saveTokenInLStorage } from '../../utils/saveData';
import { parseJwt } from '../../utils/decodeToken';
import { getUserData } from '../../services/getUserData';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

interface Props {
  sx: {
    mt: number;
    mb: number;
  };
}

function Copyright(props: Props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginComponent() {
  const router = useRouter();
  const { setUserData } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const setLocalStorage = (user: User): void => {
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    setIsLogin(true);
    const response = await signInRequest(email, password);
    if (!response?.ok) {
      setErrorMessage(response.msg);
      setIsLogin(false);
      return;
    }
    saveTokenInLStorage(response.data.jwt);
    const { sub } = parseJwt(response.data.jwt);
    const userData = await getUserData(sub, response.data.jwt);

    if (userData !== undefined) {
      setLocalStorage(userData.data);
      if (response.data.role === 'user') {
        router.push('/userDashboard');
      } else {
        router.push('/adminDashboard');
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {errorMessage && (
                <Alert severity="error" color="error">
                  {errorMessage}
                </Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLogin ? <CircularProgress /> : 'Sign In'}
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
