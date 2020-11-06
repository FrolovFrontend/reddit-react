import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

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
          <button className={styles.closeButton}>
            <Text size={14} mobileSize={12} color={EColor.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
