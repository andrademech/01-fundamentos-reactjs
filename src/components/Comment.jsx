import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, ondeletecomment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    ondeletecomment(content);
  };

  const handleLikeComment = (state) => {
    setLikeCount((state) => {
      return state + 1;
    });

    console.log('Like adicionado! :D');
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andrademech.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Herberth Andrade</strong>
              <time
                title="14 de janeiro às 12h14"
                dateTime="2023-14-01 12:14:21"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="
            Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount || ''}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
