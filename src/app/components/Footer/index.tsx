import React from "react";

const footerSections = [
  {
    title: "Our Information",
    items: ["1234 - ThaoVy", "info@albertowatch.com", "(123) 456-7890"],
  },
  {
    title: "About Us",
    items: ["Support Center", "Customer Support", "About Us", "Copy Right"],
  },
  {
    title: "Product",
    items: ["Road bikes", "Mountain bikes", "Electric", "Accessories"],
  },
  {
    title: "Social",
    items: [
      { icon: "bx bxl-facebook", url: "https://www.facebook.com/" },
      { icon: "bx bxl-twitter", url: "https://twitter.com/" },
      { icon: "bx bxl-instagram", url: "https://www.instagram.com/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container grid footer__container">
        {/* Map through footerSections array to render each section */}
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="footer__title">{section.title}</h3>
            {/* Render items based on section type */}
            {section.items.map((item, idx) => (
              <div key={idx}>
                {/* Check if item is a string or object */}
                {typeof item === "string" ? (
                  <p>{item}</p>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                  >
                    <i className={item.icon}></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <span className="footer__copy">
        2023 &#169;Alberto Watch Company. All rights reserved.
      </span>
    </footer>
  );
}
