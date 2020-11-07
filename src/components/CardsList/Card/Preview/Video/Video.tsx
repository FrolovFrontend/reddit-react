import React from 'react';
import styles from './video.css';

interface IVideoProps {
  videoPath: string;
}

export function Video({ videoPath }: IVideoProps) {
  return (
    <video
      className={styles.video}
      src={videoPath}
      autoPlay
      loop
      controls={false}
    ></video>
  );
}
