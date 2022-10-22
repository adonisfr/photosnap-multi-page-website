import Image from "next/image";
import styles from "./StorieCard.module.css";
function StorieCard({ imagen, date, title, author, textLink, link }) {
  return (
    <section>
      <article className={styles.sArticle}>
        <Image src={imagen} alt="arrow" layout="fill" />
        <div className={styles.sContentArea}>
          {date && <p className={styles.sDate}>{date}</p>}
          {title && <h1 className={styles.sTitle}>{title}</h1>}
          {author && <p className={styles.sAuthor}>{author}</p>}
          <hr className={styles.storieHr} />
          {textLink && (
            <a href={link}>
              <div className={styles.sLink}>
                <h3 className={styles.sTextLink}>{textLink}</h3>
                <div className={styles.sArrow}>
                  <Image
                    src="/assets/shared/desktop/arrow1.svg"
                    alt="arrow"
                    layout="fill"
                  />
                </div>
              </div>
            </a>
          )}
        </div>
      </article>
    </section>
  );
}

export default StorieCard;
