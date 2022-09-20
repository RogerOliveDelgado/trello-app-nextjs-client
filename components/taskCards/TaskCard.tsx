import { Box, Divider } from "@mui/material";
import React from "react";

type Task = {
  title: string;
  description: string;
  employees?: User[];
  initDate?: Date;
  endDate?: Date;
  boardRefID?: Board;
  state?: TaskState;
  tags?: Tag[];
};

export type Tag = {
  title: string;
  color: Color;
};

type TaskState = "Todo" | "In progress" | "Done";
type Color = "Red" | "Green" | "Yellow";

export interface Board {
  name: string;
  tasks: Task[];
}

export interface User {
  firstName: string;
  lastName: string;
  address: string;
  birthday: Date;
  email: string;
  password: string;
  role: Role;
  profilePicture: string;
  tasks: Task[];
}

type Role = "Admin" | "User";

const TaskCard = (props: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80px",
        maxWidth: "300px",
        margin: "5px",
        padding: "10px",
        backgroundColor: "white",
        cursor: "pointer",
        borderRadius: "md",
        overflow: "auto",
        border: "1px solid black",
        // _hover={{
        //   backgroundColor: 'lightblue'
        // }}
      }}
    >
      <p>{"Crear función"}</p>
      <p>{"klk hubo"}</p>
    </Box>
  );
};

export default TaskCard;
