const { ImagesArt } = require("../models");

const imagesArtData = [
  {
    article_id: 1,
    filename: "Long-Shot-Art.png",
  },
  // {
  //   article_id: 1,
  //   filename: "Long-Shot-Box.jpg",
  // },
  // {
  //   article_id: 1,
  //   filename: "Long-Shot-Action.png",
  // },
  {
    article_id: 2,
    filename: "TI-Art.jpg",
  },
  // {
  //   article_id: 2,
  //   filename: "TI-Box.png",
  // },
  // {
  //   article_id: 2,
  //   filename: "TI-Action.jpg",
  // },
  {
    article_id: 3,
    filename: "Cosmic-Art.jpg",
  },
  // {
  //   article_id: 3,
  //   filename: "Cosmic-Box.jpg",
  // },
  // {
  //   article_id: 3,
  //   filename: "Cosmic-Action.jpg",
  // },
  {
    article_id: 4,
    filename: "Picture-Perfect-Art.jpg",
  },
  // {
  //   article_id: 4,
  //   filename: "Picture-Perfect-Box.png",
  // },
  // {
  //   article_id: 4,
  //   filename: "Picture-Perfect-Action.jpg",
  // },
];

const seedImagesArt = () => ImagesArt.bulkCreate(imagesArtData);

module.exports = seedImagesArt;
