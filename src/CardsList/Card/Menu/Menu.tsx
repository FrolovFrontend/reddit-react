import React from "react";
import { MenuIcon } from "../../../Icons";
import { Dropdown } from "../../../Dropdown";
import styles from "./menu.css";
import { MenuItemsList } from "./MenuItemsList";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="#id" />
          <button className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
