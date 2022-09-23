import User from '../interfaces/User';

interface UsersDataResponse {
  ok: boolean;
  data: User[];
}

export const getUsersList = async (
  token: string
): Promise<UsersDataResponse | undefined> => {
  try {
    const response = await fetch(
      `https://trello-app-express-server.vercel.app/user`,
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
