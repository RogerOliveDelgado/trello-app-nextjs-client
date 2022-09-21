import User from './User';
import Board from './Board';

export default interface Task {
  title: string;
  description: string;
  employees: User[];
  initDate: Date;
  endDate: Date;
  boardRefID: Board;
  state: TaskState;
  tags?: Tag[];
}
export type Tag = {
  title: string;
  color: Color;
};

type TaskState = 'Todo' | 'In progress' | 'Done';
type Color = 'Red' | 'Green' | 'Yellow';
