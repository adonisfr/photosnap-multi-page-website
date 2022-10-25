import Head from "next/head";
import PresentationAndImg from "./components/presentationCardImg/presentationAndImg";
import Price from "./components/price/price";
import styles from "../styles/Pricing.module.css";
import Beta from "./components/beta/beta";
import Compare from "./components/compare/compare";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <PresentationAndImg
          title="PRICING"
          content="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          dark
          mobileBg="/assets/pricing/mobile/hero.jpg"
          tabletBg="/assets/pricing/tablet/hero.jpg"
          desktopBg="/assets/pricing/desktop/hero.jpg"
        />
        <div className={styles.subscription}>
          <span>Monthly</span>
          <div className={styles.btnSubscription}>
            <div className={styles.btnInside}></div>
          </div>
          <span>Yearly</span>
        </div>
        <section className={styles.pricingContainer}>
          <Price
            title="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price="$19.00"
            monthly
          />
          <Price
            title="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price="$39.00"
            monthly
            black
          />
          <Price
            title="Busines"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            price="$99.00"
            monthly
          />
        </section>
        <Compare />
        <Beta />
      </main>
    </div>
  );
}
