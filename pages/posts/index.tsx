import React from "react";
import Link from "next/link";
import Image from "next/image";
import xstk from "../../public/images/xstk.png";
import axios from "axios";
// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
interface PostProps {
  // posts: Post[];
}
export default function Post(props: PostProps) {
  return (
    <div>
      {[...Array(20)].map((x, index) => (
        <div key={index}>
          <Link href={`/posts/${index + 1}`}>
            <a>Posts Link {index + 1}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
// export async function getStaticProps() {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   return {
//     props: { posts: response.data },
//   };
// }
