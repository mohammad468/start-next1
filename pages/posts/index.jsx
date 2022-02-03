import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Index = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>posts</h1>
      </div>
      <Container>
        {props.posts.map((post) => {
          return (
            <div key={post.id} className="d-flex justify-content-center">
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <a className="nav-link">{post.title}</a>
              </Link>
            </div>
          );
        })}
      </Container>
      <Container className="d-flex justify-content-evenly">
        <Link href="/" as="">
          <a className="nav-link">back to home</a>
        </Link>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
