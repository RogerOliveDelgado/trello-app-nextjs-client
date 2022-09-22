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
  console.log(data);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          {data.map((task) => {
            return (
              <Card
                key={task._id}
                sx={{
                  width: 300,
                  minWidth: 250,
                  maxWidth: 345,
                  margin: "1rem",
                  padding: ".5rem",
                }}
              >
                <CardContent>
                  <CardHeader
                    title={
                      <Typography gutterBottom variant="h5" component="div">
                        {task.title}
                      </Typography>
                    }
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "blueviolet",
                        }}
                      >
                        J
                      </Avatar>
                    }
                  />
                  <Typography variant="body2" color="text.secondary">
                    {task.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    State: {task.state}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{
                    display: "block",
                    textAlign: "end",
                  }}
                >
                  <IconButton aria-label="add to favorites">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <DeleteForeverIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default TasksLayout;
