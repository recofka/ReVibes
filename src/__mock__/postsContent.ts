import { PostProps } from "../components/Post/Post";

interface Post extends PostProps {
  id: number;
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/recofka.png",
      name: "Denise Recofka",
      role: "Front-end Developer",
    },
    contentArr: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project to my portfolio. a project I made to practice Vite + React + TypeScript 🚀",
      },
      { type: "link", content: "denise.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-29 20:00:00"),
  },
];
