import axios from 'axios';

import { LoggedUser } from '../interfaces/User';

export type GetUsersResponse = {
  data: LoggedUser;
};
interface Error {
  message: string;
}

export const signInRequest = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  try {
    const { data, status } = await axios.post<LoggedUser>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/signInUser`,
      {
        data: {
          email,
          password,
          // password: encryptPassword(password),
        },
      }
    );
    return data;
  } catch (error) {
    console.log('error message: ', error);
    getErrorMessage(error);
  }
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return { status: 500, message: String(error) };
}
