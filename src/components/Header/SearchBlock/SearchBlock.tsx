import styles from './searchblock.module.css';

import { useUserData } from 'hooks/useUserData';

import { UserBlock } from 'components/Header/SearchBlock/UserBlock';

export function SearchBlock() {
  const { data, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
    </div>
  );
}
