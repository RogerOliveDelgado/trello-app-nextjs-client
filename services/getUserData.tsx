import axios from 'axios';
import { saveDataInJson } from '../utils/saveData';
import User from '../interfaces/User';

interface UserDataResponse {
  ok: boolean;
  data: User;
}

export const getUserData = async (
  userId: string,
  token: string
): Promise<UserDataResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
