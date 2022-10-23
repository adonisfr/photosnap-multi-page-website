import Link from "next/link";
import style from "./Menu.module.css";

function Menu({ footer }) {
  console.log("navbar", Boolean(footer));
  return (
    <ul className={footer ? style.ulFooter : style.ul}>
      {footer && (
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
      )}
      <li>
        <Link href="/stories">
          <a>stories</a>
        </Link>
      </li>
      <li>
        <Link href="/features">
          <a>features</a>
        </Link>
      </li>
      <li>
        <Link href="/pricing">
          <a>pricing</a>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
