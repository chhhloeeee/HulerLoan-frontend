import styles from "../styles/Home.module.css";
import { DropdownMenu } from "../components/menu";
import Image from "next/image";
import texture from "../images/bluefire.jpeg";

export default function Home() {
  return (
    <div className={styles.container}>
      <DropdownMenu />
      <main className={styles.main}>
        <Image
          src={texture}
          width={2150}
          height={1130}
          className={styles.background}
        />
        <h1 className={styles.title}>Welcome to HulerLoan!</h1>
      </main>
    </div>
  );
}
