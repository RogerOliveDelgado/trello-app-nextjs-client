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
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../redux/slices/tasksSlice";
import deleteTaskReq from "../../../services/deleteTask";
import { EditModal } from "../../modals/taskModal/EditModal";

type Props = {
  task: any;
};

const reqOptions = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function TaskCard({ task }: Props) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();

  const taskId = task._id;

  const deleteTask = async () => {
    Swal.fire({
      title: "Do you want to delete the task?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data: delTask } = await deleteTaskReq(taskId, reqOptions);
        dispatch(tasksActions.deleteTask(delTask));
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("The task is not deleted", "", "info");
      }
    });
  };

  function formatDate(date: string) {
    const [year, month, day] = date.split("T")[0].split("-");
    const dateFormated = `${month}-${day}-${year}`;
    return dateFormated;
  }

  return (
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
              {task.title}
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
          {`"${task.description}"`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          State: {task.state}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Initial Date: {formatDate(task.initDate)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          End Date: {formatDate(task.endDate)}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "block",
          textAlign: "end",
        }}
      >
        <IconButton aria-label="edit task" onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete task" onClick={deleteTask}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>

      {openModal && (
        <EditModal
          openModal={openModal}
          handleClose={handleClose}
          task={task}
          taskId={task._id}
        />
      )}
    </Card>
  );
}
