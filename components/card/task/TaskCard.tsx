import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Task from "../../../interfaces/Task";

type Props = {
  task: any;
};

export default function TaskCard(props: Props) {
  <Card
    sx={{
      width: 300,
      minWidth: 250,
      maxWidth: 345,
      margin: "1rem",
      padding: ".5rem",
    }}
  >
    <CardContent>
      <CardHeader
        title={
          <Typography gutterBottom variant="h5" component="div">
            {props.task.title}
          </Typography>
        }
        avatar={
          <Avatar
            sx={{
              bgcolor: "blueviolet",
            }}
          >
            J
          </Avatar>
        }
      />
      <Typography variant="body2" color="text.secondary">
        {props.task.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        State: {props.task.state}
      </Typography>
    </CardContent>
    <CardActions
      disableSpacing
      sx={{
        display: "block",
        textAlign: "end",
      }}
    >
      <IconButton aria-label="add to favorites">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="share">
        <DeleteForeverIcon />
      </IconButton>
    </CardActions>
  </Card>;
}
