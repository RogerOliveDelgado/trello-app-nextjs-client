import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { SetStateAction, useState } from "react";

import styles from "../../../styles/Dashboard.module.css";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

export const BoardModel = ({ openModal, handleClose }: Props) => {
  const [TextFieldValue, setTextFieldValue] = useState(String);

  const getTextFieldValue = (e: SetStateAction<string>) => {
    setTextFieldValue(e);
  };

  const sendTextFieldValue = () => {
    console.log(TextFieldValue);
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
