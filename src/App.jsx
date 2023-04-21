import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post>
            denise Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, corporis odit harum placeat earum, et iusto quod veniam
            inventore dicta laudantium labore nisi facere explicabo fuga
            obcaecati in ad assumenda.
          </Post>
          <Post>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            corporis odit harum placeat earum, et iusto quod veniam inventore
            dicta laudantium labore nisi facere explicabo fuga obcaecati in ad
            assumenda.
          </Post>
        </main>
      </div>
    </div>
  );
}

export default App;
