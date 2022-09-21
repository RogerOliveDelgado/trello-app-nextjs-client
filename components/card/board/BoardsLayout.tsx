import React from "react";
import styles from "../../../styles/Dashboard.module.css";
import BoardCard from "./CardBoardComponent";

//Add type Props when Backend is ready
import { Boards } from "../../../interfaces/Board";

const TasksLayout = ({ data }: Boards) => {
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
