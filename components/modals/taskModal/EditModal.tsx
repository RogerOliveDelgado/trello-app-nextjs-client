import React, { SetStateAction, useEffect, useState } from "react";
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
import getTasks from "../../../services/getTasks";
import { createTaskReq } from "../../../services/createTask";
import { useAppDispatch } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../redux/slices/tasksSlice";
import getBoards from "../../../services/getBoards";
import { Boards } from "../../../interfaces/Board";
import { useAppSelector } from "../../../redux/hooks";
import Task from "../../../interfaces/Task";
import { editTaskReq } from "../../../services/editTask";
import styles from "../../../styles/Dashboard.module.css";

//TODO: fetch boards and add to select option in modal

type Props = {
  openModal: boolean;
  handleClose: () => void;
  task: any;
  taskId: string;
};

export const EditModal = ({ openModal, handleClose, task, taskId }: Props) => {
  const boardList = useAppSelector((state) => state.boardList);
  const [boards, setBoards] = useState<Boards>({
    data: [
      {
        _id: "",
        name: "",
        tasks: [],
        initDate: "",
      },
    ],
  });

  const { data } = boards;

  const [title, setTitle] = useState(String);
  const [description, setDescription] = useState(String);
  const [board, setBoard] = useState(String);
  const [initDate, setInitDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [state, setState] = useState("Todo");

  const initMonth = initDate.split("-")[1];
  const initDay = initDate.split("-")[2];
  const initYear = initDate.split("-")[0];
  const initDateFormated = `${initMonth}-${initDay}-${initYear}`;

  const endMonth = endDate.split("-")[1];
  const endDay = endDate.split("-")[2];
  const endYear = endDate.split("-")[0];
  const endDateFormated = `${endMonth}-${endDay}-${endYear}`;

  useEffect(() => {
    getBoards(setBoards);
  }, [boardList, board]);

  const dispatch = useDispatch();

  const requestOptions = {
    mode: "cors",
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      board: board,
      initDate: initDateFormated,
      endDate: endDateFormated,
      state: state,
    }),
  };

  const editTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: tasks } = await editTaskReq(requestOptions, taskId);
    dispatch(tasksActions.editTask(tasks));
    handleClose();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "50rem",
          maxWidth: "80rem",
        },
      }}
    >
      <DialogTitle>Edit Task</DialogTitle>
      <FormControl component="form" onSubmit={editTask}>
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
            defaultValue={task.title}
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
              defaultValue={task.initDate.split("T")[0]}
              id="date"
              type="date"
              helperText="Select a start date"
              sx={{
                width: 200,
                marginRight: 4,
                marginTop: 2,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setInitDate(e.target.value)}
            />
            <TextField
              required
              defaultValue={task.endDate.split("T")[0]}
              id="date"
              type="date"
              helperText="Select an end date"
              sx={{ width: 200, marginTop: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
          <TextField
            defaultValue=""
            select
            required
            label="State"
            sx={{ width: "10rem", marginTop: 2 }}
            onChange={(e) => setState(e.target.value)}
          >
            <MenuItem value="To do">To do</MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>
          <TextField
            helperText="Select a board"
            variant="outlined"
            defaultValue=""
            select
            required
            label="Board"
            sx={{ width: "10rem", marginTop: 2 }}
            onClick={() => getBoards(setBoards)}
          >
            {data.map((board) => (
              <MenuItem
                key={board._id}
                value={board.name}
                onClick={() => setBoard(board._id)}
              >
                {board.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            label="Description"
            sx={{ marginTop: 5 }}
            defaultValue={task.description}
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">CONFIRM EDIT</Button>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
};
