import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { editBoardReq } from "../../../services/editBoard";
import Swal from "sweetalert2";

import styles from "../../../styles/Dashboard.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { boardActions } from "../../../redux/slices/boardSlice";

type Props = {
  openModal: boolean;
  handleClose: () => void;
  boardId: string;
  boardName: string;
};

export const EditBoardModel = ({
  openModal,
  handleClose,
  boardId,
  boardName,
}: Props) => {
  const [TextFieldValue, setTextFieldValue] = useState(boardName);
  const dispatch = useAppDispatch();

  const getTextFieldValue = (e: SetStateAction<string>) => {
    setTextFieldValue(e);
  };

  const requestOptions = {
    mode: "cors",
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: TextFieldValue,
    }),
  };

  const sendTextFieldValue = async () => {
    const { data: board } = await editBoardReq(requestOptions, boardId);
    Swal.fire({
      icon: "success",
      title: "Board updated",
      showConfirmButton: true,
    });
    dispatch(boardActions.updateBoard(board));
    handleClose();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      className={styles.boardModal}
    >
      <DialogTitle>Edit board</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={boardName}
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
        <Button onClick={sendTextFieldValue}>Edit modal</Button>
      </DialogActions>
    </Dialog>
  );
};
