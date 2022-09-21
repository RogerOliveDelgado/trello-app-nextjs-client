import React, { ReactNode, useEffect, useState, createContext } from 'react';
import { json } from 'stream/consumers';
import User from '../interfaces/User';

type Props = {
  children: ReactNode;
};

const user = {
  firstName: '',
  lastName: '',
  address: '',
  birthday: new Date(),
  email: '',
  password: '',
  role: '',
  profilePicture: '',
  tasks: [{}],
};

const UserCtx = {
  userData: user,
  setUserData: (userData: User) => {},
  token: '',
};
export const UserContext = createContext(UserCtx);

const UserContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState(UserCtx.userData);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData')!));
    setToken(localStorage.getItem('access_token')!);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, token }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
