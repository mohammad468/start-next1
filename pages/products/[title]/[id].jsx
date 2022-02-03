import { useRouter } from "next/router";

const SingleProduct = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query);

  return (
    <div>
      <h1>{router.query.title}</h1>
      <h2>{router.query.id}</h2>
    </div>
  );
};

export default SingleProduct;
