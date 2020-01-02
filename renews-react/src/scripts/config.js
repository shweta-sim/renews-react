// NEWS CONFIG
const articles_url = 'https://gnews.io/api/v3/topics/';
const search_url = 'https://gnews.io/api/v3/search';
const top_news_url = 'https://gnews.io/api/v3/top-news';
const _api_key = '608c2ec46030a003e81b7c14ebc58777';

// BANNER CONFIG
const banner_url =
  'https://api.unsplash.com/photos/random?orientation=landscape&client_id=';
const banner_api_key =
  '1b585e1d1c251db75eb0d50f744a4ad4bf83290b960b628b2c26bbdd8a94c848';

// WEATHER CONFIG
let weatherApiKey = 'a35b8fcb87faf12df6fd2c3fec6758f8';
let city = 'stockholm';
let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${weatherApiKey}`;
