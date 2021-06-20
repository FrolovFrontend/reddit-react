import styles from './sorting.module.css';

import { useState } from 'react';

import { Dropdown } from 'components/Dropdown';
import { SortingButton } from 'components/CommentsContainer/Sorting/SortingButton';
import { SortingList } from 'components/CommentsContainer/Sorting/SortingList';

export function Sorting() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.sorting} onClick={handleClick}>
      <Dropdown
        isOpen={isDropdownOpen}
        button={
          <SortingButton currentOption="Лучшие" isActive={isDropdownOpen}/>
        }
      >
        <div className={styles.dropdown}>
          <SortingList/>
        </div>
      </Dropdown>
    </div>
  );
}
