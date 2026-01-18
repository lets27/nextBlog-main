"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function FlipWords({ words, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Helper to style specific words
  const formatSentence = (sentence) => {
    const highlights = ["Football", "Fighting", "Basketball", "Racing", "Champions"];
    return sentence.split(" ").map((word, i) => {
      // Remove punctuation for matching
      const cleanWord = word.replace(/[^\w]/g, "");
      const isHighlighted = highlights.includes(cleanWord);
      
      return (
        <span 
          key={i} 
          className={isHighlighted ? "text-red-600" : "text-white"}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <span className="relative flex flex-col items-center justify-center h-16 overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          /* Using font-black and italic for that ESPN speed feel */
          className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-center block leading-none"
        >
          {formatSentence(words[index])}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}