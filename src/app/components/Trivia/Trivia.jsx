"use client";

import { Quicksand, Dancing_Script, Roboto } from "next/font/google";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Trivia.module.css";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Trivia() {
  const [visibleItems, setVisibleItems] = useState(new Array(4).fill(false));
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const refs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisibleItems = [...prev];
              newVisibleItems[index] = entry.isIntersecting;
              return newVisibleItems;
            });
          }
          if (entry.target === headingRef.current) {
            setIsHeadingVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <h1
        ref={headingRef}
        className={`${
          dancingScript.className
        } text-center text-xl md:text-xl lg:text-4xl font-bold text-white pt-8 ${
          isHeadingVisible ? styles["trivia-pop-up"] : styles["trivia-pop-out"]
        }`}
      >
        Why choose us?
      </h1>
      <div className="flex-1 items-center justify-center overflow-hidden pt-4 lg:pt-8 max-w-screen-lg w-full mx-auto">
        <div className="p-4">
          <div className="flex flex-col items-center gap-8">
            {[
              "Expertise",
              "Customization",
              "Innovation",
              "Attention to Detail",
            ].map((title, index) => (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                className={`flex flex-col items-center text-center ${
                  visibleItems[index]
                    ? styles["trivia-pop-up"]
                    : styles["trivia-pop-out"]
                }`}
              >
                <div className="transform transition duration-500 hover:scale-125 active:scale-125">
                  <h2
                    className={`${quicksand.className} text-lg font-semibold text-white lg:text-2xl`}
                  >
                    {title}
                  </h2>
                  <p className={`${roboto.className} text-white mt-1 text-xs lg:text-lg`}>
                    {
                      [
                        "We provide top-quality metalwork made by skilled artisans",
                        "We tailor our products to fit your unique vision",
                        "We push creative limits for cutting-edge solutions",
                        "We strive for meticulous perfection",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
