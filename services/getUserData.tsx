import axios from 'axios';
import { saveDataInJson } from '../utils/saveData';
import User from '../interfaces/User';

export const getUserData = async (token: string) => {
  try {
    const { data, status } = await axios.get<User>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getUserData`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    // return data;
    saveDataInJson(data);
  } catch (error) {
    return error;
  }
};
