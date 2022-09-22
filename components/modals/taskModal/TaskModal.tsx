import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import QuillEditor from "./QuillEditor";
import React from "react";

import styles from "../../../styles/Dashboard.module.css";

//TODO: fetch boards and add to select option in modal

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
  const url = "https://trello-app-express-server.vercel.app/board";
  const [boards, setBoards] = useState([]);

  async function fetchBoards() {
    const req = await fetch(url);
    const res = await req.json();
    setBoards(res);
  }

  useEffect(() => {
    fetchBoards();
  }, [url]);

  console.log(boards);

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
          maxWidth: "80rem",
        },
      }}
    >
      <DialogTitle>Add Task</DialogTitle>
      <FormControl component="form">
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            helperText="Enter the name of the task"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ width: 200 }}
            onChange={(e) => setTitleTask(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              required
              id="date"
              type="date"
              helperText="Select a start date"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id="date"
              type="date"
              helperText="Select an end date"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          {/* <TextField
            select
            required
            label="State"
            helperText="Select a state"
            sx={{ width: "10rem" }}
          >
            <MenuItem value="To do">To do</MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>
          <TextField
            select
            required
            label="User"
            helperText="Assign to a user"
            sx={{ width: "10rem" }}
          >
            <MenuItem value="To do">To do</MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField> */}
          <Typography
            variant="h6"
            sx={{
              marginTop: "1rem",
            }}
          >
            Description:
          </Typography>
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
      </FormControl>
    </Dialog>
  );
};
