import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";

const newArrivals = [
  {
    id: 1,
    tag: "New",
    imgSrc: "assets/img/new1.png",
    title: "Longines rose",
    price: "$980",
  },
  {
    id: 2,
    tag: "New",
    imgSrc: "assets/img/new2.png",
    title: "Jazzmaster",
    price: "$1150",
  },
  {
    id: 3,
    tag: "New",
    imgSrc: "assets/img/new3.png",
    title: "Dreyfuss gold",
    price: "$750",
  },
  {
    id: 4,
    tag: "New",
    imgSrc: "assets/img/new4.png",
    title: "Portuguese rose",
    price: "$1590",
  },
];
export default function NewSection() {
  return (
    <section className="new section container" id="new">
      <h2 className="section__title">New Arrivals</h2>

      <div className="new__container">
        <Carousel
          className="swiper new-swiper"
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              576: {},
              768: {},
              1024: {},
            },
          }}
        >
          <CarouselContent className="swiper-wrapper -ml-1">
            {newArrivals.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-1 md:basis-1/1 lg:basis-1/4"
              >
                <article key={item.id} className="new__card swiper-slide">
                  <span className="new__tag">{item.tag}</span>

                  <img src={item.imgSrc} alt="" className="new__img" />

                  <div className="new__data">
                    <h3 className="new__title">{item.title}</h3>
                    <span className="new__price">{item.price}</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
