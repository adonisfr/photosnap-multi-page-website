import styles from "./Price.module.css";

export default function Price({ title, description, price, monthly, black }) {
  return (
    <div className={black ? styles.black : ""}>
      <div className={styles.priceWraper}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <b>{price}</b>
          <span>{monthly ? "per month" : "per year"}</span>
        </div>
        <button>pick plan</button>
      </div>
    </div>
  );
}
