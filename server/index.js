const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// Данные в памяти
const users = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Ervin Howell", username: "Antonette" },
  { id: 3, name: "Clementine Bauch", username: "Samantha" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren" },
];

const posts = Array.from({ length: 25 }, (_, i) => ({
  userId: Math.floor(Math.random() * 5) + 1,
  id: i + 1,
  title: `Post title ${i + 1}`,
  body: `This is the body of post ${
    i + 1
  }. It contains detailed information about the topic.`,
}));

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
