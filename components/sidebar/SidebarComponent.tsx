import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import { useDisclosure } from "@chakra-ui/react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "../../styles/Dashboard.module.css";
import Link from "next/link";
import { BoardModal } from "../modals/boardModal/BoardModal";
import { TaskModal } from "../modals/taskModal/TaskModal";

export default function SidebarComponent() {
  const [openBoard, setOpenBoard] = React.useState(false);
  const [openTask, setOpenTask] = React.useState(false);

  type modalType = "board" | "task";

  const handleClickOpen = (type: modalType) => {
    if (type === "board") {
      setOpenBoard(true);
    } else if (type === "task") {
      setOpenTask(true);
    }
  };

  const handleClose = (type: modalType) => {
    if (type === "board") {
      setOpenBoard(false);
    } else if (type === "task") {
      setOpenTask(false);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        {/* <Link href="/home"> */}
        <ListItemButton>
          <ListItemIcon className={styles.buttons}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        {/* </Link> */}
        <ListItemButton>
          <ListItemIcon className={styles.buttons}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon className={styles.buttons}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Task" />
        </ListItemButton>
      </div>

      <div className={styles.bot}>
        <ListItemButton onClick={() => handleClickOpen("board")}>
          <ListItemIcon className={styles.buttons}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Board" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClickOpen("task")}>
          <ListItemIcon className={styles.buttons}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Task" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon className={styles.buttons}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </div>
      {openTask && (
        <TaskModal
          openTask={openTask}
          handleClose={() => handleClose("task")}
        />
      )}

      {openBoard && (
        <BoardModal
          openBoard={openBoard}
          handleClose={() => handleClose("board")}
        />
      )}
    </div>
  );
}
