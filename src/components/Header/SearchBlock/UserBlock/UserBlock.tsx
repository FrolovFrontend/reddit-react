import styles from './userblock.module.css';

import { Break } from 'components/Break';
import { EIcons, Icon } from 'components/Icon';
import { EColor, Text } from 'components/Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&state=random_string&redirect_uri=${process.env.REACT_APP_HOST}/auth&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcons.anon} size={50}/>
        )}
      </div>

      <div className={styles.username}>
        <Break size={12}/>
        {loading ? (
          <Text size={20} color={EColor.gray99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.gray99}>
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}
