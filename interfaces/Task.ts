import User from "./User";
import Board from "./Board";

export default interface Task {
  data: [
    {
       _id: string;
      title: string;
      description: string;
      employees: User[];
      initDate: string;
      endDate: string;
      board: string;
      state: TaskState;
      tags?: Tag[];
    }
  ];
}
export type Tag = {
  title: string;
  color: Color;
};

export type TaskState = "Todo" | "In progress" | "Done";
type Color = "Red" | "Green" | "Yellow";
