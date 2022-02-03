import React from "react";
import Link from "next/link";

const product2 = () => {
  return (
    <div>
      <h1>product 2 page</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  );
};

export default product2;
