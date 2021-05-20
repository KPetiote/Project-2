const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Spring Events',
    starting_date: 'March 20, 2021 07:00:00',
    ending_date: 'June 20, 2021 17:00:00',
  },
  {
    name: 'Summer Events',
    starting_date: 'June 21, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'Fall Events',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    name: 'Winter Events',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 20, 2021 19:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
