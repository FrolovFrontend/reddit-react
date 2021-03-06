import styles from './textcontent.module.css';

import { MetaData } from 'components/CardsList/Card/TextContent/MetaData';
import { Title } from 'components/CardsList/Card/TextContent/Title';

interface ITextContentProps {
  userAvatar: string;
  userName: string;
  title: string;
  created: string;
  id: string;
}

export function TextContent(props: ITextContentProps) {
  const { userAvatar, userName, title, created, id } = props;
  return (
    <div className={styles.textContent}>
      <MetaData imgPath={userAvatar} userName={userName} created={created}/>
      <Title title={title} id={id}/>
    </div>
  );
}
