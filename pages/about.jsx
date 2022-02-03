import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1 className="text-center text-uppercase">this is about page</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  );
};

export default about;