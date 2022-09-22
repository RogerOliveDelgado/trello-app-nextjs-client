import React, { useState, useEffect } from "react";

import styles from "../../../styles/Dashboard.module.css";
import BoardCard from "./CardBoardComponent";

import getBoards from "../../../services/getBoards";

//Add type Props when Backend is ready
import { Boards } from "../../../interfaces/Board";
import { useAppSelector } from "../../../store/hooks";

const TasksLayout = () => {
  const boardList = useAppSelector((state) => state.boardList);
  const [boards, setBoards] = useState<Boards>({
    data: [
      {
        _id: "",
        name: "",
        tasks: [],
        initDate: "",
      },
    ],
  });

  useEffect(() => {
    getBoards(setBoards);
  }, [boardList]);

  const { data } = boards;
  console.log(data);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {
          <>
            {data.map((board) => {
              return (
                <div key={board._id}>
                  <BoardCard board={board} />
                </div>
              );
            })}
          </>
        }
      </section>
    </main>
  );
};

export default TasksLayout;
