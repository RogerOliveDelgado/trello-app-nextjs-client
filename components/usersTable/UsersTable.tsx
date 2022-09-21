import { Container } from '@mui/material';
import { useState, useContext } from 'react';

import PropTypes from 'prop-types';
import {
  Avatar,
  Select,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  MenuItem,
} from '@mui/material';
import UsersList from '../../data/usersArr.json';
import { getInitials } from '../../utils/getInitials';
import User from '../../interfaces/User';
import { UserContext } from '../../contexts/UserContext';

type Props = {};
const UsersTable = (props: Props) => {
  const { userData, token } = useContext(UserContext);

  return (
    <>
      <Box sx={{ mt: 3, mb: 3 }}>
        <Card>
          <>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {UsersList.map((user, index) => (
                    <TableRow hover key={index}>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                          }}
                        >
                          <Avatar src={user.profilePicture} sx={{ mr: 2 }}>
                            {getInitials(user.firstName)}
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">
                            {user.firstName} {user.lastName}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{`${user.address}`}</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>
                        <Select
                          labelId="role-select"
                          id="role-select"
                          value={user.role}
                          label="Role"
                          sx={{ minWidth: 120 }}
                        >
                          <MenuItem value={'Admin'}>Admin</MenuItem>
                          <MenuItem value={'User'}>User</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </>
        </Card>
      </Box>
    </>
  );
};

export default UsersTable;
