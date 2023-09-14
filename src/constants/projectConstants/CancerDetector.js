import neuralNet from "../../assets/avifs/neuralNet.avif";
import python from "../../assets/avifs/python.avif";
import numpy from "../../assets/avifs/numpy.avif";
import scikit from "../../assets/avifs/scikit.avif";

export default {
  titleInfo: {
    title: "Early Cancer Detector",
  },
  body: () => (
    <p>
      Using Python, SciKit Learn, and the Wisconsin Breast Cancer dataset, I
      developed a neural network to classify breast tumors as either malignant
      or benign. The dataset consisted of over 500 examples, each with 10
      attributes such as radius, perimeter and area. My model was trained using
      stochastic gradient descent and a cross-entropy loss function.
    </p>
  ),
  imageInfo: {
    img: neuralNet,
    alt: "Neural Network",
  },
  techList: [
    {
      img: python,
      tooltip: "Python",
    },
    {
      img: numpy,
      tooltip: "numpy",
    },
    {
      img: scikit,
      tooltip: "sciKit",
    },
  ],
};
