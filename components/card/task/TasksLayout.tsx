import React, { useState, useEffect } from "react";
import styles from "../../../styles/Dashboard.module.css";
import TaskCard from "./TaskCard";
import Task from "../../../interfaces/Task";
import getTasks from "../../../services/getTasks";

//Add type Props when Backend is ready
import { useAppSelector } from "../../../redux/hooks";

const TasksLayout = () => {
  const tasksList = useAppSelector((state) => state.tasks);
  const [tasks, setTasks] = useState<Task>({
    data: [
      {
        _id: "",
        title: "",
        description: "",
        state: "Todo" || "In progress" || "Done",
        employees: [],
        initDate: "",
        endDate: "",
        board: "",
        tags: [],
      },
    ],
  });

  useEffect(() => {
    getTasks(setTasks);
  }, [tasksList]);

  const { data } = tasks;

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          {data.length > 0 ? (
            data.map((task) => {
              return <TaskCard key={task._id} task={task} />;
            })
          ) : (
            <h1>No tasks</h1>
          )}
        </section>
      </main>
    </>
  );
};

export default TasksLayout;
