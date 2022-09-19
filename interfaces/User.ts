export interface User {
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
