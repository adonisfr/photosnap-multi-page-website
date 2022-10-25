import styles from "./NavBar.module.css";
import BtnGetInvite from "./btnGetInvite";
import Drawer from "./drawer";
import Menu from "../menu/menu";
import Logo from "../logo";
import Link from "next/link";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nbcontainer}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
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
