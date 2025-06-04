"use client";
import "./SuccessStorie.scss";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@/svgs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamCard from "../TeamCard/TeamCard";
const slides = [
  {
    image: "/images/hotel-img-1.svg",
    title: "Crescent Takes Over The St. Anthony Hotel",
    desc: "33% RevPAR Growth",
  },
  {
    image: "/images/hotel-img-2.svg",
    title: "Crescent Manages The St. Anthony Hotel",
    desc: "120% EBIDTA Growth",
  },
  {
    image: "/images/hotel-img-3.svg",
    title: "New Marriot Partnership Announced",
    desc: "15% Customer Satisfaction Increase",
  },
  {
    image: "/images/hotel-img-4.svg",
    title: "10 New Luxury Properties in Q2",
    desc: "200+ New Rooms Managed",
  },
  {
    image: "/images/hotel-img-1.svg",
    title: "Top Hospitality Company of 2025",
    desc: "Prestigious Industry Recognition",
  },
  {
    image: "/images/hotel-img-2.svg",
    title: "Green Initiative Launched Company-Wide",
    desc: "40% Reduction in Energy Usage",
  },
  {
    image: "/images/hotel-img-3.svg",
    title: "Record Holiday Bookings in Resorts",
    desc: "Highest Holiday Occupancy Rate",
  },
  {
    image: "/images/hotel-img-4.svg",
    title: "AI Concierge Debuts in Flagship Hotels",
    desc: "Innovative Guest Services",
  },
  {
    image: "/images/hotel-img-1.svg",
    title: "Crescent Expands Into European Market",
    desc: "New Presence in 4 Countries",
  },
  {
    image: "/images/hotel-img-2.svg",
    title: "Crescent Leadership Wins Industry Awards",
    desc: "5 Executives Win Top Honors",
  },
];

const SuccessStorieSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="success-storeis-wrapper">
      <div className="common-heading">
        <p>Success Stories</p>
        <h2>
          Proven success from years of hands-on experience in hotel and{" "}
          <span>
            resort management
            <img
              src="/iconFiles/underline-heading.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </span>{" "}
          and development.
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
          slidesPerView={3}
          autoplay={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              {/* <div className="slider-card">
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
              </div> */}
              <TeamCard member={slide} />
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

export default SuccessStorieSection;
