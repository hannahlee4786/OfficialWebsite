"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Typewriter } from "motion-plus/react";
import styles from "./about.module.css";

const words = ["About Me", "My Life"];

const pageVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const slideIn = (x = 0, y = 0): Variants => ({
  hidden: {
    opacity: 0,
    x,
    y,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const cells = [
  "Blue House",
  "Heart",
  "Popcorn",
  "Chopsticks",
  "Frame",
  "Stone",
  null,
  null,
  null,
  "ABOUT ME",
  null,
  null,
  null,
  null,
  null,
  null,
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2800);

    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.main
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <motion.aside className={styles.leftRail} variants={slideIn(-120, 0)}>
        <div className={styles.logo}>
          <Link href="/">⌂</Link>
        </div>

        <div className={styles.corner}>
          <div className={styles.aboutMeWrap}>
            <Typewriter speed="slow" className={styles.aboutMe}>
              {words[index]}
            </Typewriter>
          </div>
        </div>
      </motion.aside>

      <motion.section className={styles.content} variants={slideIn(120, 0)}>
        <div className={styles.topBar}></div>

        <div className={styles.grid}>
          {cells.map((cell, index) => {
            if (cell === "ABOUT ME") {
              return (
                <div key={index} className={styles.textCell}>
                  <h2>ABOUT ME</h2>
                  <p>
                    Chess isn&apos;t my only passion. Here are some of the things I
                    enjoy outside of coding.
                  </p>
                </div>
              );
            }

            if (cell) {
              return (
                <motion.div key={index} className={styles.object}>
                  ★ {cell}
                </motion.div>
              );
            }

            return <div key={index} className={styles.emptyCell} />;
          })}
        </div>
      </motion.section>
    </motion.main>
  );
}