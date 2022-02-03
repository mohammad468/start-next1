import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.title}</h1>
      <h2>{router.query.id}</h2>
      <h2>{router.query.name}</h2>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  );
};

export default Index;
