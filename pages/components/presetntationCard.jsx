import Image from "next/image";
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
}) {
  return (
    <div className={dark ? styles.dark : ""}>
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
            <a href={link}>
              <div className={styles.link}>
                <h3 className={styles.textLink}>{textLink}</h3>
                <div className={styles.arrow}>
                  <Image
                    src={
                      dark
                        ? "/assets/shared/desktop/arrow1.svg"
                        : "/assets/shared/desktop/arrow.svg"
                    }
                    alt="arrow"
                    layout="fill"
                  />
                </div>
              </div>
            </a>
          )}
        </article>
      </section>
    </div>
  );
}

export default PresentationCard;
