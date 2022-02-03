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
      <div className="text-center my-3">
        <h1>this is product page</h1>
        <Link href="/products/[title]/[id]" as="/products/product-1/1">
          <a className="mx-2">product-1</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-2/2">
          <a className="mx-2">product-2</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-3/3">
          <a className="mx-2">product-3</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-4/4">
          <a className="mx-2">product-4</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-5/5">
          <a className="mx-2">product-5</a>
        </Link>
        <br />
        <br />
        <Link href="/">
          <a>back to home</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
