import React from "react";
import styles from "../../styles/Dashboard.module.css";
import TaskCard from "./TaskCard";

type Props = {};

const TasksLayout = (props: any) => {
  return (
    <div className={styles.tasksLayout}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TasksLayout;
