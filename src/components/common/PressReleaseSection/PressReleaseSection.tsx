import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "./PressRelease.scss";
import { ArrowLeftIcon, ArrowRightIcon, ArrowRightLongIcon } from "@/svgs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const slides = [
  {
    image: "/images/hotel-img-1.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
  {
    image: "/images/hotel-img-2.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
  {
    image: "/images/hotel-img-3.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
  {
    image: "/images/hotel-img-4.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
  {
    image: "/images/hotel-img-3.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
  {
    image: "/images/hotel-img-1.svg",
    title:
      "Crescent Hotels & Resorts Announces Management of The St. Anthony, a Luxury Collection Hotel",
    desc: "The Historic San Antonio Property Combines Old World Glamour with Contemporary",
  },
];
const PressReleaseSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="press-release-wrapper">
      <div className="common-heading">
        <p>Press Release</p>
        <h2>
          Explore our news library for articles about{" "}
          <span>
            Crescent Hotels
            <img
              src="/iconFiles/underline-heading.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>{" "}
          & Resorts.
        </h2>
      </div>
      <div className="mt-5">
        <Swiper
          className="custom-swiper"
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            if (
              typeof swiper.params.navigation !== "boolean" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={false}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="slider-card">
                <div className="image-wrapper">
                  <img src={slide.image} alt="img" />
                </div>
                <div className="content-overlay">
                  <div className="content-detail">
                    {" "}
                    <h1>{slide.title}</h1>
                    <div className="separator-line"></div>
                    <p>{slide.desc}</p>
                  </div>
                  <button>
                    Learn More
                    <ArrowRightLongIcon />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div ref={prevRef} className="swiper-button-prev custom-icon">
            <ArrowLeftIcon />
          </div>
          <div ref={nextRef} className="swiper-button-next custom-icon">
            <ArrowRightIcon />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PressReleaseSection;
