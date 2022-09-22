type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
};

export default async function deleteBoards(id: string, options: Options) {
  const req = await fetch(
    `https://trello-app-express-server.vercel.app/board/${id}`,
    options
  );
  const res = await req.json();
  return res;
}
