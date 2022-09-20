import React from "react";
import styles from "../../../styles/Dashboard.module.css";
import TaskCard from "./TaskCard";

type Props = {};

const TasksLayout = (props: any) => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
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
      </section>
    </main>
  );
};

export default TasksLayout;
