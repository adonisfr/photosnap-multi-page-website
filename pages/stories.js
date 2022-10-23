import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Stories.module.css";
import homeStyle from "../styles/Home.module.css";
import PresentationCard from "./components/presetntationCard";
import StorieCard from "./components/storieCard";

export default function Stories() {
  return (
    <div>
      <Head>
        <title>Photosnap multi-page website</title>
        <meta name="description" content="Photosnap multi-page website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <div className={styles.presentationStorie}>
          <PresentationCard
            subtitle="LAST MONTH’S FEATURED STORY"
            title="HAZY FULL MOON OF APPALACHIA"
            content={`The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.`}
            link="#"
            textLink="READ THE STORY"
            date="March 2nd 2020"
            author="by John Appleseed"
            customDark
          />
          <div className={styles.presentationStoriesImg}>
            <Image
              src="/assets/stories/mobile/moon-of-appalacia.jpg"
              alt="stories"
              layout="fill"
            />
          </div>
        </div>
        <div className={homeStyle.storiesContainer}>
          <StorieCard
            date="April 16th 2020"
            title="The Mountains"
            author="by John Appleseed"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/mountains.jpg"
          />
          <StorieCard
            date="April 14th 2020"
            title="Sunset Cityscapes"
            author="by Benjamin Cruz"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/cityscapes.jpg"
          />
          <StorieCard
            date="April 11th 2020"
            title="18 Days Voyage"
            author="by Alexei Borodin"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/18-days-voyage.jpg"
          />
          <StorieCard
            date="April 9th 2020"
            title="Architecturals"
            author="by Samantha Brooke"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/architecturals.jpg"
          />
          <StorieCard
            date="April 7th 2020"
            title="World Tour 2019"
            author="by Timothy Wagner"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/world-tour.jpg"
          />
          <StorieCard
            date="April 3rd 2020"
            title="Unforeseen Corners"
            author="by William Malcolm"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/unforeseen-corners.jpg"
          />
          <StorieCard
            date="March 29th 2020"
            title="King on Africa: Part II"
            author="by Tim Hillenburg"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/king-on-africa.jpg"
          />
          <StorieCard
            date="March 21st 2020"
            title="The Trip to Nowhere"
            author="by Felicia Rourke"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/trip-to-nowhere.jpg"
          />
          <StorieCard
            date="March 19th 2020"
            title="Rage of The Sea"
            author="by Mohammed Abdul"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/rage-of-the-sea.jpg"
          />
          <StorieCard
            date="March 16th 2020"
            title="Running Free"
            author="by Michelle"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/running-free.jpg"
          />
          <StorieCard
            date="March 11th 2020"
            title="Behind the Waves"
            author="by Lamarr Wilson"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/behind-the-waves.jpg"
          />
          <StorieCard
            date="March 9th 2020"
            title="Calm Waters"
            author="by Samantha Brooke"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/calm-waters.jpg"
          />
          <StorieCard
            date="March 5th 2020"
            title="The Milky Way"
            author="by Benjamin Cruz"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/milky-way.jpg"
          />
          <StorieCard
            date="March 4th 2020"
            title="Night at The Dark Forest"
            author="by  Mohammed Abdul"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/dark-forest.jpg"
          />
          <StorieCard
            date="March 1st 2020"
            title="Somwarpet’s Beauty"
            author="by Michelle"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/somwarpet.jpg"
          />
          <StorieCard
            date="February 25th 2020"
            title="Land of Dreams"
            author="by William Malcolm"
            textLink="READ STORY"
            imagen="/assets/stories/desktop/land-of-dreams.jpg"
          />
        </div>
      </main>
    </div>
  );
}
