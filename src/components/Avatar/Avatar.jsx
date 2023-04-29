import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      src={src}
      alt="Profile Image"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
