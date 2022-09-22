import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Swal from "sweetalert2";

import { Board } from "../../../interfaces/Board";
import router from "next/router";

import deleteBoards from "../../../services/deleteBoards";

import { useAppDispatch } from "../../../store/hooks";
import { useDispatch } from "react-redux";
import { boardActions } from "../../../store/slices/boardSlice";
import { EditBoardModel } from "../../modals/boardModal/EditBoardModal";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const reqOptions = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function BoardCard({ board }: Board) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const dispatch = useAppDispatch();

  const boardId = board._id;

  const date = board.initDate?.split("T")[0];

  const deleteBoard = async () => {
    Swal.fire({
      title: "Do you want to delete the board?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const { data: delboard } = await deleteBoards(boardId, reqOptions);
        dispatch(boardActions.deleteBoard(delboard));
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("The board is not deleted", "", "info");
      }
    });
  };

  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 345,
        margin: "1rem",
        padding: ".5rem",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {board.name[0]}
          </Avatar>
        }
        title={board.name}
        subheader={
          typeof date === "undefined"
            ? `Fecha de la creacion del board: -`
            : `Fecha de la creacion del board: ${date}`
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {board.tasks.map((task: any) => {
            return (
              <ul key={task.id}>
                <li>{task.name}</li>
              </ul>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete board" onClick={deleteBoard}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit board" onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
      </CardActions>

      {openModal && (
        <EditBoardModel
          openModal={openModal}
          handleClose={handleClose}
          modalId={board._id}
        />
      )}
    </Card>
  );
}
