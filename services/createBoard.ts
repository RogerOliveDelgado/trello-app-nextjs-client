type Options = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
};

export const createBoardReq = async (requestOptions: Options) => {
  const req = await fetch(
    'https://trello-app-express-server.vercel.app/board',
    requestOptions
  );
  const res = await req.json();

  return res;
};
