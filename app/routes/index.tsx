import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/services/posts.server";
import type { Post } from '~/services/posts.server';
import { Post as PostComponent } from '~/components/Post';

type LoaderData = {
  posts: Post[]
}
export const loader: LoaderFunction = async () => {
  const data: LoaderData = {posts: await getPosts()}
  return json(data)
}

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl text-blue-500 font-bold">Welcome to Remix</h1>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <PostComponent header={post.title}>
              {post.body}
            </PostComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
