import React from "react";
import styles from "./textcontent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
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
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной, Следует отметить,
          что новая модель организационной
        </a>
      </h2>
    </div>
  );
}
