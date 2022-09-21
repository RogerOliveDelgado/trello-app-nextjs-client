import React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";
import Task from "../interfaces/Task";

type Props = {
  data: {
    data: Task[];
  };
};

const tasks = (props: Props) => {
  return (
    <>
      <DashboardContent tasks={props} />
    </>
  );
};

export default tasks;

export async function getStaticProps() {
  const res = await fetch("https://trello-app-express-server.vercel.app/task");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
