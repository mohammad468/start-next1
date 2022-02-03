import React from "react";
import Link from "next/link";


const product1 = () => {
  return (
    <div>
      <h1>product 1 PAGE</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  );
};

export default product1;