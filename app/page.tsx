"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "motion-plus/react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const words = ["Hannah Lee", "Software Engineer", "USC Student"];

const pageVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2800);

    return () => clearInterval(id);
  }, []);

  return (
    <motion.main
      className="page"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <motion.aside className="leftRail" variants={slideIn(-140, 0)}>
        <motion.div className="brandBox" variants={slideIn(0, -90)}>
          <div className="brandBoxHalf leftHalf" />
          <div className="brandBoxHalf rightHalf" />
        </motion.div>
        <motion.div className="nameBox" variants={slideIn(0, 90)}>
          <div className="name">
            <Typewriter speed="slow">
              {words[index]}
            </Typewriter>
          </div>
        </motion.div>
      </motion.aside>

      <motion.section className="middleRail" variants={slideIn(0, -140)}>
        <motion.div id="first" className="middleTop" variants={slideIn(0, -80)}>
          <motion.span
            className="star"
            whileHover={{ scale: 1.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ★
          </motion.span>
        </motion.div>

        <motion.div className="middleTop" variants={slideIn(0, 80)} />
        <motion.div className="middleSection" variants={slideIn(0, 100)} />
        <motion.div id="fourth" className="middleSection" variants={slideIn(0, 120)} />
        <motion.div className="middleSection" variants={slideIn(0, 140)} />
      </motion.section>

      <motion.section className="content" variants={slideIn(140, 0)}>
        <motion.nav className="menu" variants={staggerChildren}>
          {["ABOUT ME", "EXPERIENCE", "PROJECTS", "CONTACT"].map((item) => (
            <motion.div
              key={item}
              variants={slideIn(90, 0)}
              whileHover={{ x: 18 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {item === "ABOUT ME" ? (
                <Link href="/about">{item}</Link>
              ) : (
                <a>{item}</a>
              )}
            </motion.div>
          ))}
        </motion.nav>

        <motion.footer className="copyright" variants={slideIn(0, 80)}>
          <p>© {new Date().getFullYear()} Hannah Lee</p>
        </motion.footer>
      </motion.section>
    </motion.main>
  );
}