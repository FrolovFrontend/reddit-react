import classNames from "classnames";
import React from "react";
import { GenericList } from "../../../../GenericList/GenericList";
import {
  BlockIcon,
  CommentsIcon,
  SavingIcon,
  SharedIcon,
  WarningIcon,
} from "../../../../Icons";
import { EColor, Text } from "../../../../Text";
import { merge } from "../../../../utils/js/merge";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import styles from "./menuitemslist.css";

const ITEMS_LIST = [
  {
    As: "li" as const,
    className: classNames(styles.menuItem, styles.menuItemComments),
    icon: <CommentsIcon />,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Комментарии
      </Text>
    ),
  },
  {
    As: "li" as const,
    className: classNames(styles.menuItem, styles.menuItemShared),
    icon: <SharedIcon />,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Поделиться
      </Text>
    ),
  },
  {
    As: "li" as const,
    className: styles.menuItem,
    icon: <BlockIcon />,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Скрыть
      </Text>
    ),
  },
  {
    As: "li" as const,
    className: classNames(styles.menuItem, styles.menuItemSave),
    icon: <SavingIcon />,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Сохранить
      </Text>
    ),
  },
  {
    As: "li" as const,
    className: styles.menuItem,
    icon: <WarningIcon />,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Пожаловаться
      </Text>
    ),
  },
].map(generateId);

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  const [list] = React.useState(ITEMS_LIST);

  const handleClickItem = () => console.log(postId);

  return (
    <ul className={styles.menuItemsList}>
      <GenericList list={list.map(merge({ onClick: handleClickItem }))} />
    </ul>
  );
}
