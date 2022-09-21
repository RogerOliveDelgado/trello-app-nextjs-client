import axios from "axios";

import { LoggedUser } from "../interfaces/User";

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
    // const { data, status } = await axios.post(
    //   "https://trello-app-express-server.vercel.app/auth/signIn",
    //   {
    //     data: {
    //       email: "juancarlos@email.com",
    //       password: "123456",
    //       // password: encryptPassword(password),
    //     },
    //   }
    // );

    const req = await fetch(
      "https://trello-app-express-server.vercel.app/auth/signIn",
      {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const res = await req.json();
    // return res;
    console.log(res);
  } catch (error) {
    console.log("error message: ", error);
    getErrorMessage(error);
  }
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return { status: 500, message: String(error) };
}
