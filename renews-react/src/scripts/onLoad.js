window.onload = () => {
  // Show clock
  updateClock();
  setInterval('updateClock()', 1000);

  // Request for random banner image as per My Topics
  fetch(`${banner_url}${banner_api_key}&query=${randomTopic}`)
    .then(res => res.json())
    .then(data => {
      handleBannerFetch(data.urls.full);
    })
    .catch(console.log);

  // Request for random top news items
  fetch(`${top_news_url}?token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      handleFetch(data);
    })
    .catch(console.log);
};
