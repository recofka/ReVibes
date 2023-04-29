import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comments.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Comments() {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Congrats</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Cheered by <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
