import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import router from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { createBoardReq } from "../../../services/createBoard";
import Swal from "sweetalert2";

import getBoards from "../../../services/getBoards";

import styles from "../../../styles/Dashboard.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { useDispatch } from "react-redux";
import { boardActions } from "../../../store/slices/boardSlice";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

export const BoardModel = ({ openModal, handleClose }: Props) => {
  const [TextFieldValue, setTextFieldValue] = useState(String);
  const dispatch = useAppDispatch();

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const fullDate = `0${month}-${day}-${year}`;

  const getTextFieldValue = (e: SetStateAction<string>) => {
    setTextFieldValue(e);
  };

  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: TextFieldValue,
      initDate: fullDate,
    }),
  };

  const sendTextFieldValue = async () => {
    const { data: board } = await createBoardReq(requestOptions);
    Swal.fire({
      icon: "success",
      title: "Board created",
      showConfirmButton: true,
    });
    dispatch(boardActions.addBoard(board));
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
          sx={{ width: 550, mb: 5 }}
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
