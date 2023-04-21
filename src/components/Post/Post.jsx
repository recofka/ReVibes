import styles from "./Post.module.css";

export function Post(props) {
  return <section className={styles.post}>{props.children}</section>;
}
