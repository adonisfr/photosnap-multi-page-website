import styles from "./Compare.module.css";
import check from "../../../public/assets/pricing/desktop/check.svg";
import Image from "next/image";

export default function Item({ title, basic, pro, business }) {
  return (
    <div className={styles.compareItem}>
      <h3>{title}</h3>
      <div className={styles.categoryItem}>
        <div>
          <span>basic</span>
          <div className={styles.check}>
            {basic ? <Image src={check} alt="+" /> : ""}
          </div>
        </div>
        <div>
          <span>pro</span>
          <div className={styles.check}>
            {pro ? <Image src={check} alt="+" /> : ""}
          </div>
        </div>
        <div>
          <span>business</span>
          <div className={styles.check}>
            {business ? <Image src={check} alt="+" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
