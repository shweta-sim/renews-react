const searchBtn = document.querySelector('#searchButton');

const getValueByEnter = searchBox => {
  if (event.key === 'Enter') {
    searchVal = searchBox.value;

    fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
      .then(res => res.json())
      .then(data => {
        handleFetch(data);
      })
      .catch(console.log);
  }
};

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  const searchVal = document.querySelector('#search').value;

  fetch(`${search_url}?q=${searchVal}&token=${_api_key}`)
    .then(res => res.json())
    .then(data => {
      handleFetch(data);
    })
    .catch(console.log);
});
