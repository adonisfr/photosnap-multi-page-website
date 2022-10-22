import Image from "next/image";
import styles from "./Feature.module.css";

function Feature({ image, title, description }) {
  return (
    <div className={styles.feature}>
      <div className={styles.image}>
        <Image src={image} layout="fill" alt="feature" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
