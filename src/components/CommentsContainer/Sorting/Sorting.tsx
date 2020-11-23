import React, { useState } from 'react';
import { Dropdown } from '../../Dropdown';
import styles from './sorting.css';
import { SortingButton } from './SortingButton';
import { SortingList } from './SortingList';

export function Sorting() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.sorting} onClick={handleClick}>
      <Dropdown
        isOpen={isDropdownOpen}
        button={
          <SortingButton currentOption="Лучшие" isActive={isDropdownOpen} />
        }
      >
        <div className={styles.dropdown}>
          <SortingList />
        </div>
      </Dropdown>
    </div>
  );
}
