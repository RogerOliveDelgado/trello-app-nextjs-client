import User from "./User";

export default interface Response {
  data: Task[];
}

export type Task = {
  _id: string;
  title: string;
  description: string;
  employees: User[];
  initDate: string;
  endDate: string;
  board: string;
  state: string;
  tags?: Tag[];
};

export type Tag = {
  title: string;
  color: Color;
};

export type TaskState = "Todo" | "In progress" | "Done";
type Color = "Red" | "Green" | "Yellow";
