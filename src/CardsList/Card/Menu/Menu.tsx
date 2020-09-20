import React from "react";
import styles from "./menu.css";
import { Dropdown } from "../../../Dropdown";
import { MenuButton } from "./MenuButton";
import { MenuList } from "./MenuList";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        button={<MenuButton />}
      >
        <MenuList />
      </Dropdown>
    </div>
  );
}
