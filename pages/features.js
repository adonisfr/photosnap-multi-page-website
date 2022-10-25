import Head from "next/head";
import styles from "../styles/Features.module.css";
import Beta from "./components/beta/beta";
import Feature from "./components/feature/features";
import PresentationCard from "./components/presetntationCard";
import PresentationAndImg from "./components/presentationCardImg/presentationAndImg";

export default function Features() {
  return (
    <div>
      <Head>
        <title>Features</title>
        <meta name="description" content="Features page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <PresentationAndImg
          title="FEATURES"
          content="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          dark
          mobileBg="/assets/features/mobile/hero.jpg"
          tabletBg="/assets/features/tablet/hero.jpg"
          desktopBg="/assets/features/desktop/hero.jpg"
        />
        <section className={styles.sectionfeaturesContainer}>
          <Feature
            title="100% Responsive"
            description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            image="/assets/features/desktop/responsive.svg"
          />
          <Feature
            title="No Photo Upload Limit"
            description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            image="/assets/features/desktop/no-limit.svg"
          />
          <Feature
            title="Available to Embed"
            description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
            image="/assets/features/desktop/embed.svg"
          />
          <Feature
            title="Custom Domain"
            description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            image="/assets/features/desktop/custom-domain.svg"
          />
          <Feature
            title="Boost Your Exposure"
            description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            image="/assets/features/desktop/boost-exposure.svg"
          />
          <Feature
            title="Drag & Drop Image"
            description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            image="/assets/features/desktop/drag-drop.svg"
          />
        </section>
        <Beta />
      </main>
    </div>
  );
}
