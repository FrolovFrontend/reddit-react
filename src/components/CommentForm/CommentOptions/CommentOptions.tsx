import React from 'react';
import {
  CommentCodeIcon,
  CommentDocIcon,
  CommentDownloadIcon,
  CommentImageIcon,
  CommentLinkIcon,
  CommentProfileIcon,
} from '../../Icons';
import styles from './commentoptions.css';

export function CommentOptions() {
  return (
    <div className={styles.options}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button>
            <CommentCodeIcon />
          </button>
        </li>
        <li className={styles.item}>
          <button>
            <CommentImageIcon />
          </button>
        </li>
        <li className={styles.item}>
          <button>
            <CommentDocIcon />
          </button>
        </li>
        <li className={styles.item}>
          <button>
            <CommentDownloadIcon />
          </button>
        </li>
        <li className={styles.item}>
          <button>
            <CommentProfileIcon />
          </button>
        </li>
        <li className={styles.item}>
          <button>
            <CommentLinkIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}
