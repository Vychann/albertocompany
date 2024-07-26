import React from "react";

const storyData = {
  sectionTitle: "Our Story",
  title: "Inspirational Watch of this year",
  description:
    "The latest and modern watches of this year, is available in various presentations in this store, discover them now.",
  buttonLabel: "Discover",
  imageSrc: "assets/img/story.png",
  altText: "Story Image",
};
export default function StorySection() {
  return (
    <section className="story section container">
      <div className="story__container grid">
        <div className="story__data">
          <h2 className="section__title story__section-title">
            {storyData.sectionTitle}
          </h2>

          <h1 className="story__title">{storyData.title}</h1>

          <p className="story__description">{storyData.description}</p>

          <a href="#" className="button button--small">
            {storyData.buttonLabel}
          </a>
        </div>

        <div className="story__images">
          <img
            src={storyData.imageSrc}
            alt={storyData.altText}
            className="story__img"
          />
          <div className="story__square"></div>
        </div>
      </div>
    </section>
  );
}
