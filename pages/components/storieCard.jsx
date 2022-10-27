import Image from "next/image";
import Link from "next/link";
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
            <div className={styles.sLink}>
              <Link href={link || ""}>
                <a>
                  <h3 className={styles.sTextLink}>{textLink}</h3>
                </a>
              </Link>
              <div className={styles.sArrow}>
                <Link href={link || ""}>
                  <a>
                    <Image
                      src="/assets/shared/desktop/arrow1.svg"
                      alt="arrow"
                      layout="fill"
                    />
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

export default StorieCard;
