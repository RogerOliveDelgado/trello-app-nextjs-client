type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const editTaskReq = async (requestOptions: Options, id: string) => {
  const req = await fetch(
    `https://trello-app-express-server.vercel.app/task/${id}`,
    requestOptions
  );
  const res = await req.json();
  console.log(res);
  return res;
};
