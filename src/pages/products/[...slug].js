import { useRouter } from "next/router";

const DynamicProductSlug = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is catch all dynamic page all catch: {router.query.slug}</h1>
    </div>
  );
};

export default DynamicProductSlug;
