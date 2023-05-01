import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/recofka.png",
      name: "Denise Recofka",
      role: "Front-end Developer",
    },

    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      { type: "link", content: "denise.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-29 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Pythagora-io.png",
      name: "Glenna Reichert",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Monster event. Project name is MonsterCare 🚀",
      },
      { type: "link", content: "reichert.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-30 20:00:00"),
  },
];

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
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
