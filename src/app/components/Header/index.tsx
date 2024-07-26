import React, { Fragment, useEffect, useRef, useState } from "react";
import Cart from "../Cart";
import { userAgent } from "next/server";

type HeaderProps = {
  username: any;
  cartItemCount: any;
};

const menuItems = [
  { id: "home", name: "Home", className: "active-link" },
  { id: "featured", name: "Featured" },
  { id: "products", name: "Products" },
  { id: "new", name: "New" },
];

export default function Header({ username, cartItemCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    const scrollHeader = () => {
      const header = headerRef.current;
      if (!header) return;
      window.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      document
        .querySelectorAll<HTMLElement>("section[id]")
        .forEach((section) => {
          const sectionId = section.getAttribute("id");
          const navLink = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
          );
          if (!navLink) return;
          const sectionTop = section.offsetTop - 58;
          const sectionHeight = section.offsetHeight;
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            navLink.classList.add("active-link");
          } else {
            navLink.classList.remove("active-link");
          }
        });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  }

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Fragment>
      <header
        ref={headerRef}
        className={`header ${theme === "dark" ? "dark-theme" : ""}`}
        id="header"
      >
        <nav className="nav container">
          <a href="#" className="nav__logo">
            {/* <i className="bx bxs-watch nav__logo-icon"></i> Rolex */}
            <img
              className="nav__logo-icon h-10"
              src="assets/logo/logo.jpg"
              alt="logo"
            />
          </a>
          <div
            className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              {/* Use map function to dynamically generate list items */}
              {menuItems.map((item) => (
                <li key={item.id} className="nav__item">
                  <a
                    href={`#${item.id}`}
                    className={`nav__link ${item.className}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              <i className="bx bx-x"></i>
            </div>
          </div>
          <div className="nav__btns">
            {/* Theme change button */}
            <i
              className={`bx bx-${
                theme === "dark" ? "sun" : "moon"
              } change-theme`}
              id="theme-button"
              onClick={toggleTheme}
            ></i>

            <div
              className="nav__shop"
              id="cart-shop"
              onClick={handleToggleCart}
            >
              <i className="bx bx-shopping-bag"></i>
              <span className="cart-item-count">{cartItemCount}</span>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
      <Cart showCart={showCart} toggleCart={handleToggleCart} />
    </Fragment>
  );
}
