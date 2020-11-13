import React from 'react';
import styles from './preview.css';
import { Image } from './Image';
import { Self } from './Self';
import { Video } from './Video';

interface IPreviewProps {
  previewImage: string;
  previewVideo: string;
  isVideo: boolean;
  isSelf: boolean;
  thumbnail: string;
}

export function Preview({
  previewImage,
  previewVideo,
  isVideo,
  isSelf,
  thumbnail,
}: IPreviewProps) {
  if (isVideo) {
    return (
      <div className={styles.preview}>
        <Video videoPath={previewVideo} />
      </div>
    );
  } else if (isSelf) {
    return (
      <div className={styles.preview}>
        <Self />
      </div>
    );
  } else {
    if (thumbnail === 'default' || thumbnail === 'image') {
      return (
        <div className={styles.preview}>
          <Self />
        </div>
      );
    } else {
      return (
        <div className={styles.preview}>
          <Image imagePath={previewImage} />
        </div>
      );
    }
  }
}
