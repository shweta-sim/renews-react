// Temperature Widget
const temperature = document.querySelector('.temperature');
const myCity = document.querySelector('.city');

fetch(url)
  .then(res => res.json())
  .then(data => {
    myCity.textContent = `${data.list[0].name}`;
    temperature.textContent = `${data.list[0].main.temp}`;
  })
  .catch(console.log);
