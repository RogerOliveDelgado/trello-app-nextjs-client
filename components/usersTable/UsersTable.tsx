import { useState, useEffect } from 'react';
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
import { getUsersList } from '../../services/getAllUsers';
import TableSkeleton from '../tableSkeleton/TableSkeleton';

type Props = {};
const UsersTable = (props: Props) => {
  const [usersList, setUsersList] = useState<User[] | null>([]);
  console.log(usersList);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getUsersList(localStorage.getItem('access_token')!);
    setUsersList(response?.data!);
  };

  return (
    <>
      <Box sx={{ mt: 3, mb: 3 }}>
        {usersList ? (
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
                    {usersList.map((user, index) => (
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
                            <MenuItem value={'admin'}>Admin</MenuItem>
                            <MenuItem value={'user'}>User</MenuItem>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </>
          </Card>
        ) : (
          <TableSkeleton />
        )}
      </Box>
    </>
  );
};

export default UsersTable;
