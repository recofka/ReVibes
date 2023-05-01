import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";
import { posts } from "./__mock__/postsContent";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                contentArr={post.contentArr}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
