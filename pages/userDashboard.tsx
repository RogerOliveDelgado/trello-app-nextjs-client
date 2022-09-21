import * as React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";

import { Boards } from "../interfaces/Board";

const requestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json", Autorization: "" },
};
export async function getStaticProps() {
  const req = await fetch(
    "https://trello-app-express-server.vercel.app/board",
    {}
  );
  const res = await req.json();

  // console.log(res);
  return {
    props: res, // will be passed to the page component as props
  };
}

export default function adminDashboard({ data }: Boards) {
  return <DashboardContent data={data} />;
}
