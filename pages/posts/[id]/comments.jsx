import React from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Link from "next/link";

const comments = (props) => {
  console.log(props);
  console.log(props.post);
  return (
    <>
      <Container>
        {props.post.map((response) => (
          <div className="border rounded-3 my-2" key={response.id}>
            <div className="d-flex justify-content-center  mt-3 text-uppercase">
              <h1>
                <Badge bg="danger">name: {response.name}</Badge>
              </h1>
            </div>
            <div className="d-flex justify-content-center  mt-3">
              <h1>
                <Badge bg="info">email: {response.email}</Badge>
              </h1>
            </div>
            <h3 className="my-3 text-primary text-center">{response.body}</h3>
          </div>
        ))}
      </Container>
    </>
  );
};

export async function getServerSideProps(Context) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Context.params.id}/comments`
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

export default comments;
