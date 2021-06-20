import styles from './menu.module.css';

import { Dropdown } from 'components/Dropdown';
import { MenuIcon } from 'components/Icons';
import { EColor, Text } from 'components/Text';
import { MenuItemsList } from 'components/CardsList/Card/Menu/MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon/>
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="#id"/>
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
