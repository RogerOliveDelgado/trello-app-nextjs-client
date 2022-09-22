import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ConfirmationModal from '../modals/confirmationModal/ConfirmationModal';

type Props = {};

const UsersToolbar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const dialogToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box {...props}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1,
          }}
        >
          <Typography sx={{ m: 1, color: 'black' }} variant="h4">
            Users
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button color="primary" variant="contained" onClick={dialogToggle}>
              Add User
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon color="action" fontSize="small">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search customer"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <ConfirmationModal open={open} handleClose={dialogToggle} />
    </>
  );
};

export default UsersToolbar;
