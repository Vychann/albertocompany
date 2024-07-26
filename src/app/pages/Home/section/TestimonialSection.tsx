import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
    date: "March 27, 2021",
    name: "Lee Doe",
    position: "Director of a company",
    imgSrc: "assets/img/testimonial1.jpg",
  },
  {
    id: 2,
    quote:
      "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
    date: "March 27, 2021",
    name: "Samantha Mey",
    position: "Director of a company",
    imgSrc: "assets/img/testimonial2.jpg",
  },
  {
    id: 3,
    quote:
      "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
    date: "March 27, 2021",
    name: "Raul Zaman",
    position: "Director of a company",
    imgSrc: "assets/img/testimonial3.jpg",
  },
];
export default function TestimonialSection() {
  return (
    <section className="testimonial section container">
      <div className="testimonial__container grid">
        <Carousel
          className="swiper testimonial-swiper"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="testimonial__card swiper-slide"
              >
                <div className="testimonial__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial__description">{testimonial.quote}</p>
                <h3 className="testimonial__date">{testimonial.date}</h3>

                <div className="testimonial__perfil">
                  <img
                    src={testimonial.imgSrc}
                    alt=""
                    className="testimonial__perfil-img"
                  />

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">
                      {testimonial.name}
                    </span>
                    <span className="testimonial__perfil-detail">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="swiper-button-prev m-2" />
          <CarouselNext className="swiper-button-next m-2" />
        </Carousel>

        <div className="testimonial__images">
          <div className="testimonial__square"></div>
          <img
            src="assets/img/testimonial.png"
            alt=""
            className="testimonial__img"
          />
        </div>
      </div>
      {/* 
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial__card swiper-slide"
              >
                <div className="testimonial__quote">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial__description">{testimonial.quote}</p>
                <h3 className="testimonial__date">{testimonial.date}</h3>

                <div className="testimonial__perfil">
                  <img
                    src={testimonial.imgSrc}
                    alt=""
                    className="testimonial__perfil-img"
                  />

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">
                      {testimonial.name}
                    </span>
                    <span className="testimonial__perfil-detail">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
================================
          <div className="swiper-button-next">
            <i className="bx bx-right-arrow-alt"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </div>

      </div> */}
    </section>
  );
}
