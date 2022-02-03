import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const contact = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>contact us</h1>
      </div>
      <Container className="d-flex justify-content-evenly">
        <Link href="/" as="">
          <a className="nav-link">back to home</a>
        </Link>
      </Container>
    </div>
  );
};

export default contact;