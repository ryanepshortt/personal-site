import React from "react";
import homeValue from "../../assets/avifs/homeValue.avif";
import python from "../../assets/avifs/python.avif";
import numpy from "../../assets/avifs/numpy.avif";
import scikit from "../../assets/avifs/scikit.avif";

export default {
  titleInfo: {
    title: "Home Value Estimator",
  },
  body: () => (
    <p>
      Used various Python libraries to develop a home value estimator. The
      estimator was trained on the Boston housing dataset that can be found
      online. The dataset includes 506 examples with 13 features each, such as
      the average number of rooms per dwelling, and the distance from the city
      center. I used basis expansion and K-Fold cross validation to gauge which
      features were most closely correlated to the associated target values.
    </p>
  ),
  imageInfo: {
    img: homeValue,
    alt: "House",
  },
  techList: [
    {
      img: python,
      tooltip: "Python",
    },
    {
      img: numpy,
      tooltip: "Numpy",
    },
    {
      img: scikit,
      tooltip: "sciKit",
    },
  ],
};
