import React, { ReactNode, useEffect, useState,createContext } from 'react';
import {LoggedUser} from "../interfaces/User"

type Props = {
  children: ReactNode;
};


const UserCtx = {
  userData: {},
  setUserData:  (userData: LoggedUser) => {} 
}
export const UserContext = createContext(UserCtx);

const UserContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState(UserCtx.userData);

  useEffect(()=>{
    localStorage.setItem('userData', JSON.stringify(userData));
  },[userData])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
