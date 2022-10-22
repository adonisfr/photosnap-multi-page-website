import Image from "next/image";
import { useState } from "react";
import BtnGetInvite from "./btnGetInvite";
import style from "./NavBar.module.css";
import Menu from "../menu/menu";

function Drawer() {
  const [toggle, setToggle] = useState(false);
  const icon = toggle
    ? "/assets/shared/mobile/close.svg"
    : "/assets/shared/mobile/menu.svg";
  return (
    <>
      <div
        className={style.imgMenu}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Image src={icon} alt="menu" layout="fill" />
      </div>
      <div
        className={`${style.drawer} ${
          toggle ? style.drawerShow : style.drawerHidden
        }`}
      >
        <Menu />
        <div>
          <hr />
        </div>
        <BtnGetInvite />
      </div>
    </>
  );
}

export default Drawer;
