import React from "react";

const products = [
  {
    id: 1,
    imgSrc: "assets/img/product1.png",
    title: "Spirit rose",
    price: 1500,
  },
  {
    id: 2,
    imgSrc: "assets/img/product2.png",
    title: "Khaki pilot",
    price: 1350,
  },
  {
    id: 3,
    imgSrc: "assets/img/product3.png",
    title: "Jubilee black",
    price: 870,
  },
  { id: 4, imgSrc: "assets/img/product4.png", title: "Fosil me3", price: 650 },
  { id: 5, imgSrc: "assets/img/product5.png", title: "Duchen", price: 950 },
];
export default function ProductsSection() {
  return (
    <section className="products section container" id="products">
      <h2 className="section__title">Products</h2>

      <div className="products__container grid">
        {products.map((product) => (
          <article key={product.id} className="products__card">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="products__img"
            />

            <h3 className="products__title">{product.title}</h3>
            <span className="products__price">${product.price}</span>

            <button className="products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
