import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewImage: string;
  //previewVideo: string;
  isVideo: boolean;
  isSelf: boolean;
}

export function Preview({
  previewImage,
  //previewVideo,
  isVideo,
  isSelf,
}: IPreviewProps) {
  if (isVideo) {
    return <div>Видео</div>;
  } else if (isSelf) {
    return <div>Заглушка</div>;
  } else {
    return (
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src={previewImage}
          alt="preview image"
        />
      </div>
    );
  }
}
