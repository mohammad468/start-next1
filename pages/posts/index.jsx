import React from "react";
import { Badge } from "react-bootstrap";
import Link from "next/link";

const Index = (props) => {
  console.log(props.posts);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>hello posts</h1>
      </div>

      {props.posts.map((post) => (
        <div className="d-flex justify-content-center" key={post.id}>
          <h3>
            <Badge>
              <Link href={`posts/${post.id}`}>
                <a className="text-white text-decoration-none">{post.title}</a>
              </Link>
            </Badge>
          </h3>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default Index;
