"use client";

import { IPost } from "@/entities/post";
import { Card, List } from "antd";
import Link from "next/link";

interface PostsListProps {
  posts: IPost[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <Link href={`/posts/${post.id}`} passHref>
            <Card title={post.title} hoverable>
              <p>{post.body.substring(0, 100)}...</p>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};
