import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comments } from "../Comments/Comments";
import { format, formatDistanceToNow } from "date-fns";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  if (!author) return;

  const [comments, setNewComments] = useState(["Nice!"]);
  const [newCommentText, setnewCommentText] = useState([""]);
  const publishedDateFormat = format(publishedAt, "LLLL do 'at' HH:mm");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleNewComment(e) {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setNewComments([...comments, newCommentText]);
    setnewCommentText("");
  }

  function handleNewCommentChange(e) {
    setnewCommentText(e.target.value);
  }

  function deleteComment(commentToDelete) {
    const listCommetsWithoutRemoved = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setNewComments(listCommetsWithoutRemoved);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Leave a feedback"
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Post Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comments
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
