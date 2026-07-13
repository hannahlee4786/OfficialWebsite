"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "motion-plus/react";
import { motion } from "framer-motion";

export default function Home() {
  const words = ["Hannah Lee", "Software Engineer", "USC Student"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);

    return () => clearInterval(id);
  }, [words.length]);

  return (
    <main className="page">
      <aside className="leftRail">
        <div className="brandBox" />

        <div className="nameBox">
          <div className="name">
            <Typewriter speed="slow" backspace="all">
              {words[index]}
            </Typewriter>
          </div>
        </div>
      </aside>

      <section className="middleRail">
        <div className="middleTop">
          <motion.span
            className="star"
            whileHover={{ scale: 1.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, }}
          >
            ★
          </motion.span>
        </div>
        <div className="middleTop" />
        <div className="middleSection" />
        <div className="middleSection" />
        <div className="middleSection" />
      </section>

      <section className="content">
        <nav className="menu">
          <a>ABOUT</a>
          <a>EXPERIENCE</a>
          <a>PROJECTS</a>
          <a>CONTACT</a>
        </nav>

        <footer className="copyright">
          <p>© {new Date().getFullYear()} Hannah Lee</p>
        </footer>
      </section>
    </main>
  );
}