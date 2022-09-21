import Task from "./Task";

export interface Boards {
  data: [
    {
      _id: string;
      name: string;
      tasks: [];
      initDate: string;
    }
  ];
}

export interface Board {
  board: {
    _id: string;
    name: string;
    tasks: [];
    initDate?: string;
  };
}
