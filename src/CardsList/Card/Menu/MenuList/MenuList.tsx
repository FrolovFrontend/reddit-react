import React from "react";
import { GenericList } from "../../../../GenericList/GenericList";
import { merge } from "../../../../utils/js/merge";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { MenuCloseButton } from "../MenuCloseButton";
import styles from "./menulist.css";

const ITEMS = [
  { As: "li" as const, className: styles.item, text: "Комментарии" },
  { As: "li" as const, className: styles.item, text: "Поделиться" },
  { As: "li" as const, className: styles.item, text: "Скрыть" },
  { As: "li" as const, className: styles.item, text: "Сохранить" },
  { As: "li" as const, className: styles.item, text: "Пожаловаться" },
].map(generateId);

export function MenuList() {
  const [items] = React.useState(ITEMS);

  const handleItemClick = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.menuList}>
      <ul className={styles.items}>
        <GenericList list={items.map(merge({ onClick: handleItemClick }))} />
      </ul>
      <MenuCloseButton />
    </div>
  );
}
