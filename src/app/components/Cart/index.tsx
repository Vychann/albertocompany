import React, { useEffect, useState } from "react";

type CartProps = {
  showCart: boolean;
  toggleCart: () => void;
};
const cartItems = [
  {
    id: 1,
    imageSrc: "assets/img/featured1.png",
    title: "Jazzmaster",
    price: 1050,
  },
  {
    id: 2,
    imageSrc: "assets/img/featured3.png",
    title: "Rose Gold",
    price: 850,
  },
  {
    id: 3,
    imageSrc: "assets/img/new1.png",
    title: "Longines Rose",
    price: 980,
  },
];
export default function Cart({ showCart, toggleCart }: CartProps) {
  const [status, setStatus] = useState<boolean>();
  useEffect(() => {
    console.log(showCart);

    setStatus(showCart);
  }, [showCart, toggleCart]);
  return (
    <div className={`cart ${status ? "show-cart" : ""}`} id="cart">
      <i
        className="bx bx-x cart__close"
        id="cart-close"
        onClick={toggleCart}
      ></i>

      <h2 className="cart__title-center">My Cart</h2>

      <div className="cart__container">
        {/* Map through cartItems array to render cart cards */}
        {cartItems.map((item) => (
          <article key={item.id} className="cart__card">
            <div className="cart__box">
              <img src={item.imageSrc} alt={item.title} className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">{item.title}</h3>
              <span className="cart__price">${item.price}</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Cart prices summary */}
      <div className="cart__prices">
        <span className="cart__prices-item">{cartItems.length} items</span>
        <span className="cart__prices-total">
          ${cartItems.reduce((total, item) => total + item.price, 0)}
        </span>
      </div>
    </div>
  );
}
