import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import QuillEditor from "./QuillEditor";
import React from "react";

import styles from "../../../styles/Dashboard.module.css";
import TaskCard from "../../card/task/TaskCard";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

type taskData = {
  title: string;
  description: string;
};

const sendData = async (data: taskData) => {
  await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const TaskModal = ({ openModal, handleClose }: Props) => {
  const [titleTask, setTitleTask] = useState(String);
  const [descriptionValue, setDescriptionValue] = useState(String);

  const sendTextFieldValue = () => {
    const taskData: taskData = {
      title: titleTask,
      description: descriptionValue,
    };
    sendData(taskData);
    handleClose();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          height: "500px",
        },
      }}
    >
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Task Name"
          type="text"
          fullWidth
          variant="standard"
          sx={{ width: 550 }}
          onChange={(e) => setTitleTask(e.target.value)}
        />
      </DialogContent>
      <DialogContent>
        <QuillEditor
          value={descriptionValue}
          onChange={setDescriptionValue}
          className={styles.TextContent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={sendTextFieldValue}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
