import React from "react";
import { Break } from "../../../Break";
import { EIcons, Icon } from "../../../Icon";
import { EColor, Text } from "../../../Text";
import styles from "./userblock.css";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity`}
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
          <Icon name={EIcons.anon} size={50} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>
          {username || "Аноним"}
        </Text>
      </div>
    </a>
  );
}
