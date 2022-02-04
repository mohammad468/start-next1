import React from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Link from "next/link";

const commentsPost = (props) => {
  console.log(props);
  console.log(props.params);
  console.log(props.post);
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center  mt-3 text-uppercase">
          <h1>
            <Badge bg="danger">{props.post.title}</Badge>
          </h1>
        </div>
        <h3 className="my-3 text-primary text-center">{props.post.body}</h3>
        <Button>
          <Link href={`${props.params.id}/comments`}>
            <a className="text-white text-uppercase text-decoration-none ">comments</a>
          </Link>
        </Button>
      </Container>
    </>
  );
};

export async function getServerSideProps(Context) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Context.params.id}`
  );
  let post = await res.json();
  let params = await Context.params;
  console.log(post);
  console.log(Context.params.id);

  return {
    props: {
      post,
      params,
    },
  };
}

export default commentsPost;
