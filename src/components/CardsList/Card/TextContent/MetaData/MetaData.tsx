import styles from './metadata.module.css';

import { CreatedAt } from 'components/CardsList/Card/TextContent/MetaData/CreatedAt';
import { UserLink } from 'components/CardsList/Card/TextContent/MetaData/UserLink';

interface IMetaDataProps {
  imgPath: string;
  userName: string;
  created: string;
}

export function MetaData({ imgPath, userName, created }: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink imgPath={imgPath} userName={userName}/>
      <CreatedAt created={created}/>
    </div>
  );
}
