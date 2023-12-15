/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Market Basket Analysis with python in PowerBI 🎉",
    description:
      "Uncover the secrets of your customers' shopping behavior with Market Basket Analysis. This is a technique used by large retailers to uncover associations between items. It works by looking for combinations of items that occur together frequently in transactions. I used python in PowerBI to perform this analysis. You can learn with me on YouTube.",
    url: "https://www.youtube.com/watch?v=tcRy753qvTQ",
  },
  {
    title: "Emotion Analysis of Tweets and Reddit Posts using a Pre-trained roBERTa Model from Hugging Face",
    description:
      "This project involved analyzing over 10,000 Reddit posts and 7,700 tweets to uncover insights into user engagement, emotion trends, and discussion themes around the Israel-Palestine conflict across two major social platforms - Reddit and Twitter.",
    url: "https://github.com/DroidPrezzo/Emotional_analysis",
  },
  {
    title: "Bike Rental Store Data Analysis- Udacity Project",
    description:
      "This Project uses Python and Pandas to enable a user analyze the data of a Bike rental store for 6 months in three US cities. It gives insight into the operations of the Bike rental store which can be useful for making conclusions or concrete decisions about the store.",
    url: "https://github.com/DroidPrezzo/pdsnd_github",
  },
  {
    title: "AI Image Classifier - Udacity Project",
    description:
      "This project is part of Udacity's AI Programming with Python Nanodegree. It classifies images from a dataset using a convolutional neural network built with PyTorch. In this project, I developed code for an image classifier built with PyTorch, then converted it into a command line application.",
    url: "https://github.com/DroidPrezzo/AI-image-classifier",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
