import React from "react";
import styles from "./textcontent.css";
import { MetaData } from "./MetaData";
import { Title } from "./Title";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData />
      <Title />
    </div>
  );
}
