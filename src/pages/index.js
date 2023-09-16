import Link from "next/link";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.menu}>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/calender"}>
            <li>calender</li>
          </Link>
          <Link href={"/about"}>
            <li>about</li>
          </Link>
          <Link href={"/products"}>
            <li>product</li>
          </Link>
        </ul>
      </div>
      <h1 className={styles.heading_title}>This is my home page by next js</h1>{" "}
      <br />
      <div className={styles.article_para}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat
          ullam numquam error eos quisquam voluptates rerum pariatur quos rem,
          exercitationem sunt, illo, hic dicta quidem soluta in? Laboriosam,
          vero sequi! Molestias sequi inventore quis. Magni quod soluta eaque,
          laboriosam at perspiciatis unde. Culpa minus a magnam possimus
          quibusdam! modi quia reprehenderit odit repellat rem? Tenetur odio
          exercitationem ratione assumenda neque debitis.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat
          ullam numquam error eos quisquam voluptates rerum pariatur quos rem,
          exercitationem sunt, illo, hic dicta quidem soluta in? Laboriosam,
          vero sequi! Molestias sequi inventore quis. Magni quod soluta eaque,
          laboriosam at perspiciatis unde. Culpa minus a magnam possimus
          quibusdam! modi quia reprehenderit odit repellat rem? Tenetur odio
          exercitationem ratione assumenda neque debitis.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat
          ullam numquam error eos quisquam voluptates rerum pariatur quos rem,
          exercitationem sunt, illo, hic dicta quidem soluta in? Laboriosam,
          vero sequi! Molestias sequi inventore quis. Magni quod soluta eaque,
          laboriosam at perspiciatis unde. Culpa minus a magnam possimus
          quibusdam! modi quia reprehenderit odit repellat rem? Tenetur odio
          exercitationem ratione assumenda neque debitis.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat
          ullam numquam error eos quisquam voluptates rerum pariatur quos rem,
          exercitationem sunt, illo, hic dicta quidem soluta in? Laboriosam,
          vero sequi! Molestias sequi inventore quis. Magni quod soluta eaque,
          laboriosam at perspiciatis unde. Culpa minus a magnam possimus
          quibusdam! modi quia reprehenderit odit repellat rem? Tenetur odio
          exercitationem ratione assumenda neque debitis.
        </p>{" "}
        <br />
      </div>
    </div>
  );
};

export default HomePage;
