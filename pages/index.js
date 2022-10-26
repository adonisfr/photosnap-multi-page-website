import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Feature from "./components/feature/features";
import PresentationCard from "./components/presetntationCard";
import StorieCard from "./components/storieCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photosnap multi-page website</title>
        <meta name="description" content="Photosnap multi-page website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        <div className={styles.createStories}>
          <PresentationCard
            title="Create and share your photo stories. "
            content="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
            link="#"
            textLink="GET AN INVITE"
            dark
          />
          <div className={styles.createStoriesImg}>
            <Image
              src="/assets/home/desktop/create-and-share.jpg"
              alt="stories"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.beautifulStories}>
          <PresentationCard
            title="BEAUTIFUL STORIES EVERY TIME"
            content="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
            link="#"
            textLink="VIEW THE STORIES"
            hideGradient
          />
          <div className={styles.createStoriesImg}>
            <Image
              src="/assets/home/desktop/beautiful-stories.jpg"
              alt="stories"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.createStories}>
          <PresentationCard
            title="DESIGNED FOR EVERYONE"
            content="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
            link="#"
            textLink="VIEW THE STORIES"
            hideGradient
          />
          <div className={styles.createStoriesImg}>
            <Image
              src="/assets/home/desktop/designed-for-everyone.jpg"
              alt="stories"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.storiesContainer}>
          <div>
            <StorieCard
              title="The Mountains"
              author="by John Appleseed"
              textLink="READ STORY"
              imagen="/assets/stories/desktop/mountains.jpg"
            />
          </div>
          <div>
            <StorieCard
              title="Sunset Cityscapes"
              author="by Benjamin Cruz"
              textLink="READ STORY"
              imagen="/assets/stories/desktop/cityscapes.jpg"
            />
          </div>
          <div>
            <StorieCard
              title="18 Days Voyage"
              author="by Alexei Borodin"
              textLink="READ STORY"
              imagen="/assets/stories/desktop/18-days-voyage.jpg"
            />
          </div>
          <div>
            <StorieCard
              title="Architecturals"
              author="by Samantha Brooke"
              textLink="READ STORY"
              imagen="/assets/stories/desktop/architecturals.jpg"
            />
          </div>
        </div>
        <section className={styles.featuresContainer}>
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
        </section>
      </main>
    </div>
  );
}
