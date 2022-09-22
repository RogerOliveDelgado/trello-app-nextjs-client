import * as React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";

interface Props {
  data: [
    {
      _id: string;
      name: string;
      tasks: [];
    }
  ];
}

export async function getStaticProps() {
  const req = await fetch("https://trello-app-express-server.vercel.app/board");
  const res = await req.json();

  // console.log(res);
  return {
    props: res, // will be passed to the page component as props
  };
}

export default function adminDashboard({ data }: Props) {
  //console.log(data);
  return <DashboardContent />;
}
