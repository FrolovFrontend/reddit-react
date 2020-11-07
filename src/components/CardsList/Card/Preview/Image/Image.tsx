import React from 'react';
import styles from './image.css';

interface IImageProps {
  imagePath: string;
}

export function Image({ imagePath }: IImageProps) {
  return (
    <img className={styles.previewImg} src={imagePath} alt="preview image" />
  );
}
