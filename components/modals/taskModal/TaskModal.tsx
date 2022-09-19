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

type Props = {
  openTask: boolean;
  handleClose: () => void;
};

export const TaskModal = ({ openTask, handleClose }: Props) => {
  const [description, setDescription] = useState("");

  return (
    <Dialog open={openTask} onClose={handleClose}>
      <DialogTitle>Add Task Description</DialogTitle>
      <DialogContent>
        <QuillEditor value={description} onChange={setDescription} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
