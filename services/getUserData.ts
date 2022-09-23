import User from "../interfaces/User";

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
      `https://trello-app-express-server.vercel.app/user/${userId}`,
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
