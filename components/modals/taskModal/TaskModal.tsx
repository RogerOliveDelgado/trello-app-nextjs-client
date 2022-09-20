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

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

export const TaskModal = ({ openModal, handleClose }: Props) => {
  const [description, setDescription] = useState("");

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
        />
      </DialogContent>
      <DialogContent>
        <QuillEditor
          value={description}
          onChange={setDescription}
          className={styles.TextContent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
