import { postApi } from "@/entities/post";
import { PostsList } from "@/features/posts-list";

export const revalidate = 60;

async function getPosts() {
  const res = await postApi.getAll();
  return res.data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Все посты</h1>
      <PostsList posts={posts} />
    </main>
  );
}
