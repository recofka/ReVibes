import { Avatar } from "../Avatar/Avatar";
import styles from "./SideBar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"
        alt="Profile cover image"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/recofka.png" alt="Profile Image" />

        <strong>Denise</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
}
