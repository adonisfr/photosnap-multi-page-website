import Image from "next/image";
import Link from "next/link";
import styles from "./PresentationCard.module.css";

function PresentationCard({
  subtitle,
  title,
  date,
  author,
  content,
  link,
  textLink,
  dark,
  customDark,
  hideGradient,
}) {
  let theme = "";
  if (dark) {
    theme = styles.dark;
  }
  if (customDark) {
    theme = styles.customDark;
  }

  return (
    <div className={theme}>
      <section className={styles.section}>
        <article className={styles.article}>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          {title && <h1 className={styles.title}>{title}</h1>}
          {date || author ? (
            <div className={styles.publication}>
              <p className={styles.date}>{date}</p>
              <span className={styles.author}>{author}</span>
            </div>
          ) : null}
          {content && <h1 className={styles.content}>{content}</h1>}
          {textLink && (
            <div className={styles.link}>
              <Link href={link}>
                <a>
                  <h3 className={styles.textLink}>{textLink}</h3>
                  <div className={styles.arrow}>
                    <Image
                      src={
                        dark || customDark
                          ? "/assets/shared/desktop/arrow1.svg"
                          : "/assets/shared/desktop/arrow.svg"
                      }
                      alt="arrow"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </div>
          )}
          {hideGradient ? "" : <div className={styles.sectionGradient}></div>}
        </article>
      </section>
    </div>
  );
}

export default PresentationCard;
