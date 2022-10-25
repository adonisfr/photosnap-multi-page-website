import styles from "./Compare.module.css";
import Item from "./item";

export default function Compare() {
  return (
    <div className={styles.containerCompare}>
      <div className={styles.compareTitle}>
        <h1>Compare</h1>
      </div>
      <div className={styles.featuresHeader}>
        <h3>The features</h3>
        <div>
          <h3>basic</h3>
          <h3>pro</h3>
          <h3>business</h3>
        </div>
      </div>
      <Item title="UNLIMITED STORY POSTING" basic pro business />
      <Item title="UNLIMITED PHOTO UPLOAD" basic pro business />
      <Item title="EMBEDDING CUSTOM CONTENT" pro business />
      <Item title="CUSTOMIZE METADATA" pro business />
      <Item title="ADVANCED METRICS" business />
      <Item title="PHOTO DOWNLOADS" business />
      <Item title="SEARCH ENGINE INDEXING" business />
      <Item title="CUSTOM ANALYTICS" business />
    </div>
  );
}
