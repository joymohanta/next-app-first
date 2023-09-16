import { Button } from "antd";
import { useRouter } from "next/router";
import styles from "@/styles/About.module.css";

const AboutPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className={styles.title}>This is about page of joy</h1> <br />
      <Button type="primary">Primary Button</Button> <br />
    </div>
  );
};

export default AboutPage;
