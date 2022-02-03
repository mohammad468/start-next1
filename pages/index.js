import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">HelloWorld</h1>
      <div className="d-flex justify-content-center my-3">
        <Link href="/about">
          <a className="mx-2">about</a>
        </Link>
        <Link href="/products">
          <a className="mx-2">products</a>
        </Link>
      </div>
      <div className="text-center my-3">
        <Link href="/products/[title]/[id]" as="/products/product-1/1">
          <a className="mx-2">product-1</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-1/1">
          <a className="mx-2">product-2</a>
        </Link>
        <Link href="/products/[title]/[id]" as="/products/product-1/1">
          <a className="mx-2">product-3</a>
        </Link>
      </div>
    </div>
  );
}
