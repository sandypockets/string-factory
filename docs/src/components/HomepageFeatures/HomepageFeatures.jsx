import React from "react";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Simple",
    description: (
      <>
        Straightforward, do-what-they-say-they-do functions.
      </>
    ),
  },
  {
    title: "Focus on the fun stuff",
    description: (
      <>
        Don't waste your time converting camel case to kebab case. Build your app instead.
      </>
    ),
  },
  {
    title: "Zero dependency",
    description: (
      <>
        Tiny, zero dependencies, and no frills.
      </>
    ),
  }
];

function Feature({ title, description }) {
  return (
    <div className={styles.feature}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
