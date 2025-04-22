import { postApi } from "@/entities/post/api/postApi";
import { PostDetail } from "@/entities/post/ui";
import { userApi } from "@/entities/user";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

async function getPostWithAuthor(id: number) {
  const post = await postApi.getById(id);
  const user = await userApi.getById(post.data.userId);

  return { post: post.data, user: user.data };
}

export const revalidate = 60;

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;

  const { post: postResponse, user: userResponse } = await getPostWithAuthor(
    +id
  );

  if (!postResponse) {
    return notFound();
  }

  return <PostDetail post={postResponse} user={userResponse} />;
}

// Генерация статических путей при сборке
// export async function generateStaticParams() {
//   const posts = await postApi.getAll().then(res => res.data);

//   return posts.map(post => ({
//     id: post.id.toString(),
//   }));
// }