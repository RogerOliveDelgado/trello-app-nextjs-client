import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';

type Props = {};

const Account = (props: Props) => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={userData.profilePicture}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {userData.firstName} {userData.lastName}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {`${userData.email}`}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {userData.role}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Account;
