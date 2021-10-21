import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import xstk from "../../public/images/xstk.png";
import axios from "axios";
import { GetStaticProps } from "next";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostDetailProps {
  posts: Post;
}

export default function PostDetail({ posts }: PostDetailProps) {
  const route = useRouter();
  console.log(route);
  return (
    <div>
      <Head>
        <title>{`${posts.title}`}</title>
      </Head>
      <div>{posts.title}</div>
      {/* <Image objectFit="cover" src={xstk} alt="Picture Xstk" /> */}
    </div>
  );
}
export async function getStaticPaths() {
  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const paths = response.data.map((post) => ({
    params: { idpost: post.id.toString() },
  }));
  // console.log("paths", paths);
  return {
    paths,
    fallback: true,
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params!.idpost}`
  );
  return {
    props: {
      posts: response.data,
    },
  };
};
