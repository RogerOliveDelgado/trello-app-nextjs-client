import React, { SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import { createTaskReq } from "../../../services/createTask";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../redux/slices/tasksSlice";
import getBoards from "../../../services/getBoards";
import { Boards } from "../../../interfaces/Board";
import { useAppSelector } from "../../../redux/hooks";



type Props = {
  openModal: boolean;
  handleClose: () => void;
};

type taskData = {
  title: string;
  description: string;
};

export const TaskModal = ({ openModal, handleClose }: Props) => {
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

  useEffect(() => {
    getBoards(setBoards);
  }, [boardList]);

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

  const dispatch = useDispatch();

  const requestOptions = {
    mode: "cors",
    method: "POST",
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

  const sendTextFieldValue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: tasks } = await createTaskReq(requestOptions);
    dispatch(tasksActions.addTask(tasks));
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
      <DialogTitle>Add Task</DialogTitle>
      <FormControl component="form" onSubmit={sendTextFieldValue}>
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
            defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
              id="date"
              type="date"
              helperText="Select an end date"
              sx={{ width: 200, marginTop: 2  }}
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
            sx={{ width: "10rem", marginTop: 2  }}
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
            sx={{ width: "10rem", marginTop: 2  }}
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
            defaultValue=""
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
};
