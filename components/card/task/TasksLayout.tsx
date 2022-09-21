import React from "react";
import styles from "../../../styles/Dashboard.module.css";
import TaskCard from "./TaskCard";
import Task from "../../../interfaces/Task";

type Props = {
  tasks: {
    data: {
      data: Task[];
    };
  };
};

const TasksLayout = (props: Props) => {
  const tasks = props.tasks.data.data;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {tasks.map((task: Task) => {
          return <TaskCard key={task._id} task={task} />;
        })}
      </section>
    </main>
  );
};

export default TasksLayout;
