"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import styles from "./Carousel.module.css";
import { Quicksand, Dancing_Script } from "next/font/google";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import artwork_1 from "../../../../public/artwork_1.jpg";
import artwork_2 from "../../../../public/artwork_2.jpg";
import artwork_3 from "../../../../public/artwork_3.jpg";
import artwork_4 from "../../../../public/artwork_4.jpg";
import artwork_5 from "../../../../public/artwork_5.jpg";
import artwork_6 from "../../../../public/artwork_6.jpg";
import artwork_7 from "../../../../public/artwork_7.jpg";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Carousel() {
  const autoplayTimer = useRef(null);
  const swiperRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.01 : 0.1, // Lower threshold for small screens
        rootMargin: window.innerWidth < 768 ? "100px" : "50px",
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleUserInteraction = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }

    if (autoplayTimer.current) {
      clearTimeout(autoplayTimer.current);
    }

    autoplayTimer.current = setTimeout(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, 3000);
  };

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
    return () => {
      if (autoplayTimer.current) {
        clearTimeout(autoplayTimer.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div className="flex max-w-screen-lg w-full items-stretch bg-gradient-radial from-black to-stone-800 rounded-sm lg:rounded-lg">
        <div
          ref={textRef}
          className={`flex-1 p-4 justify-center flex flex-col max-h-96 overflow-hidden pt-8 ${
            isVisible ? styles.slideIn : styles.slideOut
          }`}
        >
          <h1
            className={`${dancingScript.className} text-2xl lg:text-4xl text-white pb-4 lg:pb-10`}
          >
            About Us
          </h1>
          <p className={`text-white text-xs lg:text-lg ${quicksand.className}`}>
            Metal Art Solutions is a premier provider of bespoke metalwork,
            where craftmanship meets creativity to transform raw materials into
            exquisite pieces of art.
          </p>
          <p
            className={`text-white text-xs lg:text-lg ${quicksand.className} pt-4`}
          >
            With a passion for innovation and a dedication to excellence, we
            specialize in crafting custom metalwork solutions that elevate
            spaces and captivate imaginations.
          </p>
          <Button className="p-8 items-center justify-center mt-4 lg:mt-8 w-auto lg:mb-0 mb-4 lg:w-1/2 flex">
            <h1
              className={`${dancingScript.className} text-2xl lg:text-4xl text-white`}
            >
              Read More
            </h1>
          </Button>
        </div>
        <div className="flex-1 p-4 max-h-96 lg:max-h-full overflow-hidden pt-4">
          <Swiper
            pagination={true}
            ref={swiperRef}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            loop={true}
            modules={[EffectCreative, Autoplay, Pagination]}
            className={styles.mySwiper}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onTouchStart={handleUserInteraction}
            onSlideChange={handleUserInteraction}
          >
            {[
              artwork_1,
              artwork_2,
              artwork_3,
              artwork_4,
              artwork_5,
              artwork_6,
              artwork_7,
            ].map((artwork, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={artwork.src}
                  width={500}
                  height={500}
                  alt={`Artwork ${index + 1}`}
                  className={styles.fixedImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
