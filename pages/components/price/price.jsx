import styles from "./Price.module.css";

export default function Price({
  title,
  description,
  price,
  monthly,
  black,
  main,
}) {
  return (
    <div
      className={`${styles.priceWraperContainer} ${black ? styles.black : ""}`}
    >
      <div
        className={`${styles.priceWraper} `}
        style={{ "--height": main ? "470px" : "407px" }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <b>{price}</b>
          <span>{monthly ? "per month" : "per year"}</span>
        </div>
        <button>pick plan</button>
      </div>
      {main && <div className={styles.priceWraperGradient}></div>}
    </div>
  );
}
