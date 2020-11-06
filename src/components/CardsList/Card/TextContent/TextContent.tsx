import React from 'react';
import styles from './textcontent.css';
import { MetaData } from './MetaData';
import { Title } from './Title';

interface ITextContentProps {
  userAvatar: string;
  userName: string;
  title: string;
  created: number;
}

export function TextContent(props: ITextContentProps) {
  const { userAvatar, userName, title, created } = props;
  return (
    <div className={styles.textContent}>
      <MetaData imgPath={userAvatar} userName={userName} created={created} />
      <Title title={title} />
    </div>
  );
}
