export default async function getBoards(setBoards: any) {
  const req = await fetch(
    "https://trello-app-express-server.vercel.app/board",
    {}
  );
  const res = await req.json();

  setBoards(res);
}
