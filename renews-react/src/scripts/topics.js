let defaultTopics = [
  'world',
  'nation',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health'
];

let topics = window.localStorage.getItem('remainingTopics')
  ? JSON.parse(window.localStorage.getItem('remainingTopics'))
  : defaultTopics;

let myTopics = window.localStorage.getItem('chosenTopics')
  ? JSON.parse(window.localStorage.getItem('chosenTopics'))
  : [];

const topicsWrapper = document.getElementById('addTopicsWrapper');
const myTopicsWrapper = document.getElementById('myTopicsWrapper');

const saveToLocalStorage = () => {
  window.localStorage.setItem('remainingTopics', JSON.stringify(topics));
  window.localStorage.setItem('chosenTopics', JSON.stringify(myTopics));
};

const generateButtons = topics => {
  for (let topic of topics) {
    let topicButton = topicsWrapper.appendChild(
      document.createElement('button')
    );
    topicButton.textContent = topic;
    topicButton.addEventListener('click', e => {
      const choice = e.target.textContent;
      myTopics.push(choice);
      topics.splice(topics.indexOf(choice), 1);
      window.dispatchEvent(new Event('stateChanged'));
    });
  }
};

const generateMenu = myTopics => {
  if (myTopics.length > 0) {
    myTopicsWrapper.style.display = 'block';
  }
  for (let topic of myTopics) {
    let myTopicButton = myTopicsWrapper.appendChild(
      document.createElement('button')
    );
    myTopicButton.textContent = topic;
    myTopicButton.addEventListener('click', e => {
      e.preventDefault();
      fetch(`${articles_url}${topic}?token=${_api_key}`)
        .then(res => res.json())
        .then(data => {
          handleFetch(data);
        })
        .catch(console.log);
    });
  }
};

window.addEventListener('stateChanged', () => {
  myTopicsWrapper.innerHTML = '';
  topicsWrapper.innerHTML = '';
  generateButtons(topics);
  generateMenu(myTopics);
  saveToLocalStorage();
});

window.dispatchEvent(new Event('stateChanged'));
