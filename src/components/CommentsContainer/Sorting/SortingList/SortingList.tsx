import React from 'react';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import {
  GenericList,
  IGenericListItem,
} from '../../../GenericList/GenericList';
import { EColor, Text } from '../../../Text';
import styles from './sortinglist.css';

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
  return (
    <ul className={styles.sortinglist}>
      <GenericList list={SORTING_ITEMS} />
    </ul>
  );
}
