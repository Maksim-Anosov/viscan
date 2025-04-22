"use client";
import { IUser } from "@/entities/user";
import { Button, Card } from "antd";
import { useRouter } from "next/navigation";
import { IPost } from "../model/types";

interface PostDetailProps {
  post: IPost;
  user?: IUser;
}

export const PostDetail = ({ post, user }: PostDetailProps) => {
  const router = useRouter();

  return (
    <Card
      title={post.title}
      extra={user && <span>Author: {user.name}</span>}
      style={{ width: "80%", margin: "20px auto" }}
    >
      <p>{post.body}</p>
      <Button onClick={() => router.back()}>Back</Button>
    </Card>
  );
};
