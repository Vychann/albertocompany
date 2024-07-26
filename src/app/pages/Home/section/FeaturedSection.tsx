import React from "react";

const featuredProducts = [
  {
    tag: "Sale",
    imageSrc: "assets/img/featured1.png",
    title: "Jazzmaster",
    price: 1050,
  },
  {
    tag: "Sale",
    imageSrc: "assets/img/featured2.png",
    title: "Ingersoll",
    price: 250,
  },
  {
    tag: "Sale",
    imageSrc: "assets/img/featured3.png",
    title: "Rose gold",
    price: 890,
  },
];

export default function FeaturedSection() {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">Featured</h2>

      <div className="featured__container grid">
        {featuredProducts.map((product, index) => (
          <article key={index} className="featured__card">
            <span className="featured__tag">{product.tag}</span>

            <img
              src={product.imageSrc}
              alt={product.title}
              className="featured__img"
            />

            <div className="featured__data">
              <h3 className="featured__title">{product.title}</h3>
              <span className="featured__price">${product.price}</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>
        ))}
      </div>
    </section>
  );
}
