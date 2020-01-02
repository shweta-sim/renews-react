// Using Moment JS to get current Date & Time
const dashboardDate = document.querySelector('#date');
const dashboardTime = document.querySelector('#time');

// DATE
dashboardDate.innerHTML = moment().format('MMMM Do YYYY');

// TIME
const updateClock = () => {
  dashboardTime.innerHTML = moment().format('LTS');
};
