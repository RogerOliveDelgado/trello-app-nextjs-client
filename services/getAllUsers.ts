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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
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
