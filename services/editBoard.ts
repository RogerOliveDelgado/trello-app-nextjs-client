type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const editBoardReq = async (requestOptions: Options, id: string) => {
  const req = await fetch(
    `https://trello-app-express-server.vercel.app/board/${id}`,
    requestOptions
  );
  const res = await req.json();
  return res;
};
