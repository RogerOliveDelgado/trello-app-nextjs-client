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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signIn`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
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
