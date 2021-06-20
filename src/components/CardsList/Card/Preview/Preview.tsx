import styles from './preview.module.css';

import { Image } from 'components/CardsList/Card/Preview/Image';
import { Self } from 'components/CardsList/Card/Preview/Self';
import { Video } from 'components/CardsList/Card/Preview/Video';

interface IPreviewProps {
  previewImage: string;
  previewVideo: string;
  isVideo: boolean;
  isSelf: boolean;
  thumbnail: string;
}

export function Preview(props: IPreviewProps) {
  const {
    previewImage,
    previewVideo,
    isVideo,
    isSelf,
    thumbnail,
  } = props;

  if (isVideo) {
    return (
      <div className={styles.preview}>
        <Video videoPath={previewVideo}/>
      </div>
    );
  } else if (isSelf) {
    return (
      <div className={styles.preview}>
        <Self/>
      </div>
    );
  } else {
    if (thumbnail === 'default' || thumbnail === 'image') {
      return (
        <div className={styles.preview}>
          <Self/>
        </div>
      );
    } else {
      return (
        <div className={styles.preview}>
          <Image imagePath={previewImage}/>
        </div>
      );
    }
  }
}
