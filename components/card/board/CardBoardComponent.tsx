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

import { Board } from "../../../interfaces/Board";
import router from "next/router";

import deleteBoards from "../../../services/deleteBoards";

import { useAppDispatch } from "../../../store/hooks";
import { useDispatch } from "react-redux";
import { boardActions } from "../../../store/slices/boardSlice";

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
  const dispatch = useAppDispatch();

  const boardId = board._id;

  const date = board.initDate?.split("T")[0];

  const deleteBoard = async () => {
    const { data: delboard } = await deleteBoards(boardId, reqOptions);
    dispatch(boardActions.deleteBoard(delboard));
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
        <IconButton aria-label="edit board">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
