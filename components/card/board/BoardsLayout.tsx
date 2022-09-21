import React from "react";
import styles from "../../../styles/Dashboard.module.css";
import BoardCard from "./CardBoardComponent";

type Props = {};

const TasksLayout = (props: any) => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </section>
    </main>
  );
};

export default TasksLayout;