import React, { useState, useEffect } from "react";
import styles from "../../../styles/Dashboard.module.css";
import TaskCard from "./TaskCard";
import Task from "../../../interfaces/Task";
import TaskState from "../../../interfaces/Task";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

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
