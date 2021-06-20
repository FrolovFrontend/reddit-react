import styles from './menuitemslist.module.css';

import classNames from 'classnames';
import { useState } from 'react';

import { merge } from 'utils/js/merge';
import { generateId } from 'utils/react/generateRandomIndex';

import { GenericList, IGenericListItem } from 'components/GenericList/GenericList';
import { EIcons, Icon } from 'components/Icon';
import { EColor, Text } from 'components/Text';

const ITEMS_LIST: IGenericListItem[] = [
  {
    As: 'li' as const,
    className: classNames(styles.menuItem, styles.menuItemComments),
    icon: <Icon name={EIcons.comments} size={14}/>,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Комментарии
      </Text>
    ),
  },
  {
    As: 'li' as const,
    className: classNames(styles.menuItem, styles.menuItemShared),
    icon: <Icon name={EIcons.shared} size={14}/>,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Поделиться
      </Text>
    ),
  },
  {
    As: 'li' as const,
    className: styles.menuItem,
    icon: <Icon name={EIcons.block} size={14}/>,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Скрыть
      </Text>
    ),
  },
  {
    As: 'li' as const,
    className: classNames(styles.menuItem, styles.menuItemSave),
    icon: <Icon name={EIcons.saving} size={14}/>,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Сохранить
      </Text>
    ),
  },
  {
    As: 'li' as const,
    className: styles.menuItem,
    icon: <Icon name={EIcons.warning} size={14}/>,
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
  const [list] = useState(ITEMS_LIST);

  const handleClickItem = () => console.log(postId);

  return (
    <ul className={styles.menuItemsList}>
      <GenericList list={list.map(merge({ onClick: handleClickItem }))}/>
    </ul>
  );
}
