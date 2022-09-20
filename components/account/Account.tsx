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

type Props = {};

const user = {
  avatar:
    'https://68.media.tumblr.com/a5320481d6ba1cee58dd54f7a76c91c7/tumblr_mlotnrqkb11rh8ue8o1_500.jpg',
  city: 'Mos Eisley',
  country: 'Tatooine',
  jobTitle: 'The Chosen One',
  name: 'Darth Vader',
  timezone: 'GTM-27',
};

const Account = (props: Props) => {
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
              src={user.avatar}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {user.name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {user.timezone}
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
