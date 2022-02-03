import Link from "next/link";
import { Container } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>HelloWorld</h1>
      </div>
      <Container className="d-flex justify-content-evenly">
        <Link href="/about" as="">
          <a className="nav-link">about</a>
        </Link>
        <Link href="/contact" as="">
          <a className="nav-link">contact</a>
        </Link>
        <Link href="/posts" as="">
          <a className="nav-link">posts</a>
        </Link>
      </Container>
    </div>
  );
};
export default Home;
