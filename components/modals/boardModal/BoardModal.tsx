import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

type Props = {
  openBoard: boolean;
  handleClose: () => void;
};

export const BoardModal = ({ openBoard, handleClose }: Props) => {
  return (
    <Dialog open={openBoard} onClose={handleClose}>
      <DialogTitle>Create board</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Board Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};
