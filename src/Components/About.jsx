/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Data Scientist, Specialized in Machine Learning, Deep Learning and NLP. I have developed impressive projects in my Masters leveraging ML, DL, Python, Data Analysis & MySQL.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Science",
  "PowerBI",
  "Natural Language Processing",
  "Python",
  "Tensorflow",
  "Scikit Learn",
  "Keras",
  "OpenCV",
  "Computer Vision",
  "Deep Learning",
  "Deep Neural Networks",
  "Machine Learning",
  "Data Analysis",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Masters student in AI and ML at BHU with a strong passion for the field. Skilled in various machine learning techniques, deep learning algorithms, and data analysis. Seeking opportunities to apply theoretical knowledge in practical settings to solve real-world problems. Experienced in app development and web development, with a keen interest in expanding skills in these areas. Dedicated to continuous learning and keeping up with the latest advancements in AI, ML, and software development.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
