import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to <strong>Apple Hub</strong>, your premier destination for the latest and most innovative Apple products. 
          Our mission is to provide high-quality products and exceptional customer service to tech enthusiasts around the globe.
        </p>
        <div className={styles.values}>
          <div className={styles.value}>
            <h2>🌟 Quality</h2>
            <p>We ensure every product meets the highest standards of quality and performance.</p>
          </div>
          <div className={styles.value}>
            <h2>🚀 Innovation</h2>
            <p>We embrace cutting-edge technology to bring you the best Apple experience.</p>
          </div>
          <div className={styles.value}>
            <h2>💼 Professionalism</h2>
            <p>Our dedicated team is here to assist you with expert advice and support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
