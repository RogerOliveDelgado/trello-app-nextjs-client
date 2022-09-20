import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { textAlign } from "@mui/system";

export default function TaskCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "1rem",
        padding: ".5rem",
      }}
    >
      <CardContent>
        <CardHeader
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
        <Typography gutterBottom variant="h5" component="div">
          Title task
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus
          error aut reiciendis ratione ab aspernatur eius, tempore quo similique
          reprehenderit, corporis consectetur placeat perspiciatis veniam
          debitis est illum a.
        </Typography>
      </CardContent>
      <CardActions>
        <EditIcon />
        <DeleteForeverIcon />
      </CardActions>
    </Card>
  );
}
