import { Dispatch, SetStateAction } from "react";
import { Boards } from "../interfaces/Board";

export default async function getBoards(
  setBoards: Dispatch<SetStateAction<Boards>>
) {
  const req = await fetch(
    "https://trello-app-express-server.vercel.app/board",
    {}
  );
  const res = await req.json();

  setBoards(res);
}
