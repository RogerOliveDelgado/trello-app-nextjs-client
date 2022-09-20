import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { createBoardReq } from "../../../services/createBoard";

import styles from "../../../styles/Dashboard.module.css";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

export const BoardModel = ({ openModal, handleClose }: Props) => {
  const [TextFieldValue, setTextFieldValue] = useState(String);
  const [fetchData, setFetchData] = useState();

  const getTextFieldValue = (e: SetStateAction<string>) => {
    setTextFieldValue(e);
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ TextFieldValue }),
  };

  const sendTextFieldValue = async () => {
    createBoardReq(requestOptions);
    handleClose();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      className={styles.boardModal}
    >
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
          sx={{ width: 550 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            getTextFieldValue(e.target.value)
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={sendTextFieldValue}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};
