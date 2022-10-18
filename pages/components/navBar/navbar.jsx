import Image from "next/image";
import styles from "./NavBar.module.css";
import BtnGetInvite from "./btnGetInvite";
import Drawer from "./drawer";
import Menu from "./menu";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            layout="fill"
          />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.btn}>
          <BtnGetInvite />
        </div>
        <Drawer />
      </div>
    </nav>
  );
}

export default NavBar;
