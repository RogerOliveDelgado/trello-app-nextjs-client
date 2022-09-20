import Task from './Task';

export interface User2 {
  email: string;
  password: string;
}

export interface LoggedUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
}

export default interface User {
  firstName: string;
  lastName: string;
  address: string;
  birthday: Date;
  email: string;
  password: string;
  role: Role;
  profilePicture: string;
  tasks: Task[];
}

type Role = 'Admin' | 'User';
