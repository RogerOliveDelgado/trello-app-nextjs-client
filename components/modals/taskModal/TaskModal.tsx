import { SetStateAction, useEffect, useState } from "react";
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
import getTasks from "../../../services/getTasks";
import { createTaskReq } from "../../../services/createTask";
import { useAppDispatch } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../slices/tasksSlice";

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
  const [title, setTitle] = useState(String);
  const [description, setDescription] = useState(String);
  const [board, setBoard] = useState(String);
  const [initDate, setInitDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [state, setState] = useState("Todo");

  const dispatch = useDispatch();

  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      board: board,
      initDate: initDate,
      endDate: endDate,
      state: state,
    }),
  };

  const sendTextFieldValue = async () => {
    const { data: tasks } = await createTaskReq(requestOptions);
    //dispatch(tasksActions.addTask(tasks));

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
            onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setInitDate(e.target.value)}
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
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
          <TextField
            select
            required
            label="State"
            helperText="Select a state"
            sx={{ width: "10rem" }}
            onChange={(e) => setState(e.target.value)}
          >
            <MenuItem value="To do">To do</MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>
          {/* <TextField
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
            value={description}
            onChange={setDescription}
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
