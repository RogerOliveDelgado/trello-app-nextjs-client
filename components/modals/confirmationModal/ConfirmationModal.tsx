import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { createUser } from '../../../services/createUser';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  SelectProps,
} from '@mui/material';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const ConfirmationModal = ({ open, handleClose }: Props) => {
  const [role, setRole] = useState('Admin');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    birthday: '',
    role: 'User',
  });

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const onChange = (event: any) => {
    console.log(event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const createUser = async (event: any) => {};

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{'Add new User'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={onChange}
                value={user.firstName}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={onChange}
                value={user.lastName}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={onChange}
                value={user.address}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                required
                onChange={onChange}
                value={user.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                onChange={onChange}
                value={user.password}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birthday"
                name="birthday"
                type="date"
                onChange={onChange}
                value={user.birthday}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="select-role"
                id="select-role"
                label="Role"
                onChange={onChange}
                value={user.role}
              >
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'User'}>User</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={createUser} autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
