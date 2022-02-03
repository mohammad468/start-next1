import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  );
};

export default Index;
