import Head from "next/head";
import PresentationAndImg from "./components/presentationCardImg/presentationAndImg";
import Beta from "./components/beta/beta";
import Compare from "./components/compare/compare";
import Subscription from "./components/subscription/subscription";

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
        <Subscription />
        <Compare />
        <Beta />
      </main>
    </div>
  );
}
