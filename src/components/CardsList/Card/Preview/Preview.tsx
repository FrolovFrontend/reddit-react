import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://static.dribbble.com/users/1940055/screenshots/14212932/1600_1200-broom-dribbble-1_4x.png?compress=1&resize=800x600"
        alt="preview image"
      />
    </div>
  );
}
