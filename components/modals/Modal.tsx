import React from "react";
import { BoardModel } from "./boardModal/BoardModal";
import { TaskModal } from "./taskModal/TaskModal";

type Props = {
  openModal: boolean;
  handleClose: () => void;
  modalType: string;
};

export const Modal = ({ openModal, handleClose, modalType }: Props) => {
  return (
    <>
      {modalType === "board" && (
        <BoardModel openModal={openModal} handleClose={handleClose} />
      )}
      {modalType === "task" && (
        <TaskModal openModal={openModal} handleClose={handleClose} />
      )}
    </>
  );
};
