import React from "react";
import styles from "./metadata.css";

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://static.dribbble.com/users/77241/avatars/normal/e3a0069803b02cfdb3cb9031ecd3b12e.jpg?1599151966"
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>
          Дмитрий Гришин
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
      </span>
    </div>
  );
}
