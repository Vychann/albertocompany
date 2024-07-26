import React, { Fragment, useEffect, useRef, useState } from "react";
import HomeSection from "./section/HomeSection";
import FeaturedSection from "./section/FeaturedSection";
import StorySection from "./section/StorySection";
import ProductsSection from "./section/ProductsSection";
import TestimonialSection from "./section/TestimonialSection";
import NewSection from "./section/NewSection";
import NewsLetterSection from "./section/NewsLetterSection";

export default function Home() {
  const scollUpRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const scrollUp = () => {
      const scrollUp = scollUpRef.current;
      if (!scrollUp) return;
      window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);
  return (
    <Fragment>
      <HomeSection />
      <FeaturedSection />
      <StorySection />
      <ProductsSection />
      <TestimonialSection />
      <NewSection />
      <NewsLetterSection />
      <a ref={scollUpRef} href="#" className="scrollup" id="scroll-up">
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </Fragment>
  );
}
