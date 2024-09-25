"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import React, { useState, useRef, useEffect } from "react";
import { Dancing_Script } from "next/font/google";

import CatalogItem from "./CatalogItem";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./Catalog.module.css";

import product_1 from "../../../../public/ss_round_tile_trim.jpg";
import product_2 from "../../../../public/ss_square_tile_trim.webp";
import product_3 from "../../../../public/ss_square_tile_trim_gold.jpg";
import product_4 from "../../../../public/ss_square_tile_trime_rose_gold.webp";
import product_5 from "../../../../public/ss_steel_square_tile_trim_black.jpg";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PRODUCTS = [
  {
    label: "Stainless Steel Square Round Tile Trim (Gloss / Matte Surface)",
    description: "(H) 12mm, (W) 12mm, (L) 2440mm",
    src: product_1,
    price: 23,
  },
  {
    label: "Stainless Steel Round Tile Trim (Gloss / Matte Surface)",
    description: "(H) 12mm, (L) 2440mm",
    src: product_2,
    price: 23,
  },
  {
    label: "Stainless Steel Square Tile Trim (Gloss Gold)",
    description: "(H) 12mm, (W) 12mm, (L) 2440mm",
    src: product_3,
    price: 23,
  },
  {
    label: "Stainless Steel Square Tile Trim (Gloss Rose Gold)",
    description: "(H) 12mm, (W) 12mm, (L) 2440mm",
    src: product_4,
    price: 23,
  },
  {
    label: "Stainless Steel Square Tile Trim (Gloss Black/ Matte Black)",
    description: "(H) 12mm, (W) 12mm, (L) 2440mm",
    src: product_5,
    price: 23,
  },
];

export default function Catalog() {
  const sliderRef = useRef(null);
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

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      ref={sliderRef}
      className="bg-gradient-radial from-black to-stone-800 mt-8"
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        opacity: isVisible ? 1 : 0.9,
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
      }}
    >
      <h1
        className={`${dancingScript.className} text-center text-xl md:text-xl lg:text-4xl font-bold text-white text-shadow-md pt-8`}
      >
        Our Catalog
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "24px",
        }}
        navigation={true}
        centeredSlides={true}
        modules={[EffectCoverflow, Navigation]}
        className="catalog-swiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {PRODUCTS.map((product, index) => (
          <SwiperSlide key={index} className="catalog-swiper-slide">
            <CatalogItem
              src={product.src}
              label={product.label}
              desc={product.description}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
