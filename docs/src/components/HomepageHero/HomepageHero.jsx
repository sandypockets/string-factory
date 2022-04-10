import React from "react";
import styles from "./HomepageHero.module.css";

export default function HomepageHero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <span>
          <img className={styles.svg} src="img/production.svg" width={75} />
        </span>
        <span className={styles.title}>
          <code className={styles.titleCode}>string-factory</code>
        </span>
      </h1>
      <p className={styles.subTitle}>
        A simple but powerful JavaScript string manipulation library.</p>
    </div>
  );
}
