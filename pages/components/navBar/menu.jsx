import Link from "next/link";
import style from "./NavBar.module.css";

function Menu() {
  return (
    <ul className={style.ul}>
      <li>
        <Link href="/">
          <a>stories</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>features</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>pricing</a>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
