type Options = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
};

export const createUser = async (requestOptions: Options) => {
  const req = await fetch(
    'https://trello-app-express-server.vercel.app/auth/SignUp',
    requestOptions
  );
  const res = await req.json();

  return res;
};
