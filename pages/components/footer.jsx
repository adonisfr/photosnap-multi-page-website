import Image from "next/image";
import styles from "./Footer.module.css";
import Social from "./social";
import Link from "next/link";
import Menu from "./menu/menu";
import Logo from "./logo";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Link href="/">
            <a>
              <Logo color="white" />
            </a>
          </Link>
        </div>
        <div className={styles.footerMenu}>
          <Menu footer />
        </div>
        <div className={styles.social}>
          <Social />
        </div>
        <div className={styles.inviteLink}>
          <Link href="#">
            <div>
              <a>get an invite</a>
              <Image
                src="/assets/shared/desktop/arrow1.svg"
                alt="arrow"
                height={12}
                width={46}
              />
            </div>
          </Link>
        </div>
        <div className={styles.copyRight}>
          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
