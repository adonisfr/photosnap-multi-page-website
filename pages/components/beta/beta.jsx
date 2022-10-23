import Image from "next/image";
import Link from "next/link";
import styles from "./Beta.module.css";
export function Beta() {
  return (
    <div className={styles.beta}>
      <h1>We’re in beta. Get your invite today!</h1>
      <div>
        <Link href="#">
          <a>
            <div className={styles.bcontainer}>
              <h3>get an invite</h3>
              <div className={styles.bArrow}>
                <Image
                  src="/assets/shared/desktop/arrow1.svg"
                  alt="arrow"
                  layout="fill"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
