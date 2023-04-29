import { Avatar } from "../Avatar/Avatar";
import { Comments } from "../Comments/Comments";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/recofka.png" />

          <div className={styles.authorInfo}>
            <strong>Denise Recofka</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="April 25th 10:30 am" dateTime="2023-04-24 10:30:21">
          Posted 2 hours ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey guys 👋 </p>

        <p>
          I just uploaded another project to my portfolio. It's a project I did
          at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀
        </p>

        <p>
          <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea></textarea>
        <footer>
          <button type="submit">Post Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  );
}
