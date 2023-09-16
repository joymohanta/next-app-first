import { useRouter } from "next/router";

const DynamicProducts = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic page no : {router.query.dynamicProduct}</h1>
    </div>
  );
};

export default DynamicProducts;
