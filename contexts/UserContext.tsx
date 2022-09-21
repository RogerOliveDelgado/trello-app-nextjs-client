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
};
export const UserContext = createContext(UserCtx);

const UserContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState(UserCtx.userData);

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setUserData(JSON.parse(localStorage.getItem('userData')!));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
