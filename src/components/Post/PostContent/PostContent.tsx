import React from 'react';
import styles from './postcontent.css';

export function PostContent() {
  return (
    <div className={styles.postContent}>
      <p>
        Есть над чем задуматься: тщательные исследования конкурентов
        представляют собой не что иное, как квинтэссенцию победы маркетинга над
        разумом и должны быть ассоциативно распределены по отраслям. Прежде
        всего, начало повседневной работы по формированию позиции однозначно
        фиксирует необходимость кластеризации усилий. Но сторонники
        тоталитаризма в науке и по сей день остаются уделом либералов, которые
        жаждут быть превращены в посмешище, хотя само их существование приносит
        несомненную пользу обществу.
      </p>
      <div>
        <img src="https://source.unsplash.com/random" width="100%" alt="" />
      </div>
    </div>
  );
}