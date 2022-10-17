import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photosnap multi-page website</title>
        <meta name="description" content="Photosnap multi-page website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>main</main>
    </div>
  );
}
