import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewImage: string;
  //previewVideo: string;
  isVideo: boolean;
}

export function Preview({
  previewImage,
  //previewVideo,
  isVideo,
}: IPreviewProps) {
  if (isVideo) {
    return <div>Видео</div>;
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
