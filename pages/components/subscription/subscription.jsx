import { useState } from "react";
import Price from "../price/price";
import styles from "./Subscription.module.css";

export default function Subscription() {
  const [monthlySubscription, setMonthlySubscription] = useState(false);
  return (
    <>
      <div className={styles.subscription}>
        <span
          className={monthlySubscription ? styles.subscriptionSpanBlack : ""}
        >
          Monthly
        </span>
        <div
          className={`${styles.btnSubscription} ${
            monthlySubscription ? "" : styles.btnBlack
          }`}
          onClick={() => setMonthlySubscription(!monthlySubscription)}
        >
          <div
            className={`${styles.btnInside} ${
              monthlySubscription ? styles.btnInsideLeft : styles.btnInsideRight
            }`}
          ></div>
        </div>
        <span
          className={monthlySubscription ? "" : styles.subscriptionSpanBlack}
        >
          Yearly
        </span>
      </div>
      <section className={styles.pricingContainer}>
        <Price
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          price={`$${monthlySubscription ? "19.00" : "190.00"}`}
          monthly={monthlySubscription}
        />
        <Price
          title="Pro"
          description="More advanced features available. Recommended for photography veterans and professionals."
          price={`$${monthlySubscription ? "39.00" : "390.00"}`}
          monthly={monthlySubscription}
          black
          main
        />
        <Price
          title="Busines"
          description="Additional features available such as more detailed metrics. Recommended for business owners."
          price={`$${monthlySubscription ? "99.00" : "990.00"}`}
          monthly={monthlySubscription}
        />
      </section>
    </>
  );
}
