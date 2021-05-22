const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Spring Orientation',
    artist: 'Central Jersey HQ',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-spring-events.jpg',
    description:
      'Spring Orientation will be held on March 20th, 2021 at our Central Jersey HQ, this will be a great opportunity to to meet other students and get an overview of our program',
  },
  {
    title: 'Kean University',
    artist: 'Union, New Jersey',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-kean-campus.webp',
    description: 'Kean University Visiting Day.',
  },
  {
    title: 'Montclair State University',
    artist: 'Montclair, New Jersey',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '03-montclair-campus.jpg',
    description: 'Montclair State University Visiting Day.',
  },
  {
    title: 'Rowan University',
    artist: 'Glassboro, New Jersey',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '04-rowan-campus.jpg',
    description: 'Rowan University Visiting Day.',
  },
  {
    title: 'Rutgers University',
    artist: 'New Brunswick, NJ',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '05-rutgers-campus.jpg',
    description: 'Rutgers University Visiting Day.',
  },
  {
    title: 'The College of New Jersey',
    artist: 'Ewing, New Jersey',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '06-tcnj-campus.png',
    description: 'The College of New Jersey Visiting Day.',
  },
  {
    title: 'Summer Orientation',
    artist: 'S_Photo',
    exhibition_date: 'June 10, 2019',
    gallery_id: 2,
    filename: '01-summer-events.jpg',
    description: 'Summer Orientation to meet other students',
  },
  {
    title: 'Beach Chairs',
    artist: 'icemanphotos',
    exhibition_date: 'July 4, 2020',
    gallery_id: 2,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    artist: 'VRstudio',
    exhibition_date: 'August 14, 2016',
    gallery_id: 2,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Orientation',
    artist: 'DrivingJack',
    exhibition_date: 'October 15, 2018',
    gallery_id: 3,
    filename: '01-fall-events.jpg',
    description:
      'Fall Orientation to meet other students',
  },
  {
    title: 'Autumn Mountains',
    artist: 'Vitalii_Mamchuk',
    exhibition_date: 'November 3, 2016',
    gallery_id: 3,
    filename: '07-autumn-mountains.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Winter Orientation',
    artist: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    gallery_id: 4,
    filename: '01-winter-events.jpg',
    description:
      'Winter Orientation to meet other students',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    exhibition_date: 'January 20, 2018',
    gallery_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
