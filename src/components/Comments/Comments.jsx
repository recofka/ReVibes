import { useState } from "react";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comments.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Comments({ content, onDeleteComment }) {
  const [likeCounter, serLikeCounter] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    serLikeCounter((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/recofka.png" hasBorder={false} />

      <div className={styles.commentBoxWrapper}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Denise Recofka</strong>
              <time title="April 25th 10:30 am" dateTime="2023-04-24 10:30:21">
                Posted 2 hours ago
              </time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Cheered by <span>{likeCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
