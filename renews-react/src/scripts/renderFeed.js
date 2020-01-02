const newsWrapper = document.querySelector('.newsfeed');

const clearFeed = () => {
  newsWrapper.innerHTML = '';
};

const renderFeed = content => {
  let articleWrapper = newsWrapper.appendChild(
    document.createElement('article')
  );
  let articleDiv = articleWrapper.appendChild(document.createElement('div'));
  let articleImg = articleDiv.appendChild(document.createElement('img'));
  let articleHeading = articleDiv.appendChild(document.createElement('h5'));
  let articleDate = articleDiv.appendChild(document.createElement('p'));
  let articleDesc = articleDiv.appendChild(document.createElement('p'));

  articleImg.src = images[Math.floor(Math.random() * images.length)];
  articleHeading.textContent = content.title;
  articleDate.textContent = content.publishedAt;
  articleDesc.textContent = content.description;

  articleWrapper.addEventListener('click', () => {
    window.open(content.url);
  });
};

const handleFetch = data => {
  const results = data.articles;
  clearFeed();
  for (let r of results) {
    renderFeed(r);
  }
};
