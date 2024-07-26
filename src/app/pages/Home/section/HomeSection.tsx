import React from "react";

const socialLinks = [
  { url: "https://www.facebook.com/", text: "Facebook" },
  { url: "https://twitter.com/", text: "Twitter" },
  { url: "https://www.instagram.com/", text: "Instagram" },
];

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="container grid home__container">
        <div className="home__img-bg">
          <img src="assets/img/home.png" alt="Watch" className="home__img" />
        </div>

        <div className="home__social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="home__data">
          <h1 className="home__title">
            NEW WATCH <br /> COLLECTIONS B720
          </h1>
          <p className="home__description">
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <span className="home__price">$1245</span>

          <div className="home__btns">
            <a href="#" className="button button--gray button--small">
              Discover
            </a>

            <button className="button home__button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
}
