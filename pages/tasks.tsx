import React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";

type Props = {};

const tasks = (props: Props) => {
  return (
    <>
      <DashboardContent tasks={true} />
    </>
  );
};

export default tasks;
