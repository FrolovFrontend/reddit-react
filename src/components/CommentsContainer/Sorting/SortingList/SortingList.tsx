import styles from './sortinglist.module.css';

import { useState } from 'react';

import { merge } from 'utils/js/merge';
import { generateId } from 'utils/react/generateRandomIndex';

import { GenericList, IGenericListItem } from 'components/GenericList/GenericList';
import { EColor, Text } from 'components/Text';

const SORTING_ITEMS: IGenericListItem[] = [
  {
    As: 'li' as const,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Сначала новые
      </Text>
    ),
    className: styles.sortingitem,
  },
  {
    As: 'li' as const,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Сначала старые
      </Text>
    ),
    className: styles.sortingitem,
  },
  {
    As: 'li' as const,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Спорные
      </Text>
    ),
    className: styles.sortingitem,
  },
  {
    As: 'li' as const,
    text: (
      <Text size={14} mobileSize={12} color={EColor.gray99}>
        Вопрос-ответ
      </Text>
    ),
    className: styles.sortingitem,
  },
].map(generateId);

export function SortingList() {
  const [list] = useState(SORTING_ITEMS);

  const handleItemClick = (id: string) => {
    console.log(id);
  };

  return (
    <ul className={styles.sortinglist}>
      <GenericList list={list.map(merge({ onClick: handleItemClick }))}/>
    </ul>
  );
}
