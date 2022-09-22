type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
};

export default async function deleteTaskReq(id: string, options: Options) {
  const req = await fetch(
    `https://trello-app-express-server.vercel.app/task/${id}`,
    options
  );
  const res = await req.json();
  console.log(res);
  return res;
}
