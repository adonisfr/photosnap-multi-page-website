import PresentationCard from "../presetntationCard";
import styles from "./presentationAndImg.module.css";

export default function PresentationAndImg({
  mobileBg,
  tabletBg,
  desktopBg,
  ...prop
}) {
  return (
    <div className={styles.presentationCardImg}>
      <PresentationCard {...prop} />
      <div
        className={styles.presentationImg}
        style={{
          "--mobileBg": `url(${mobileBg})`,
          "--tabletBg": `url(${tabletBg})`,
          "--desktopBg": `url(${desktopBg})`,
        }}
      ></div>
    </div>
  );
}
