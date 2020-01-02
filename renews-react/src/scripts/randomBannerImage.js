// Images Data
const images = [
  'imgs/img-news1.jpg',
  'imgs/img-news2.jpg',
  'imgs/img-news3.jpg',
  'imgs/img-news4.jpg',
  'imgs/img-news5.jpg',
  'imgs/img-news6.jpg',
  'imgs/img-news7.jpg',
  'imgs/img-news8.jpg',
  'imgs/img-news9.jpg',
  'imgs/img-news10.jpg',
  'imgs/img-news11.jpg',
  'imgs/img-news12.jpg',
  'imgs/img-news13.jpeg',
  'imgs/img-news14.jpeg',
  'imgs/img-news15.jpeg',
  'imgs/img-news16.jpeg',
  'imgs/img-news17.jpeg',
  'imgs/img-news18.jpeg',
  'imgs/img-news19.jpeg',
  'imgs/img-news20.jpeg',
  'imgs/img-news21.jpeg',
  'imgs/img-news22.jpeg'
];

// Generate random images based on selected topic
const randomTopic = myTopics[Math.floor(Math.random() * images.length)];

const randomImage = document.querySelector('.w-banner');
const handleBannerFetch = data => {
  randomImage.style.backgroundImage = `url("${data}")`;
};
