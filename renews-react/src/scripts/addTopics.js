// Add Topics Modal Window
let modal = document.querySelector('.modal');
let trigger = document.querySelector('.trigger');

trigger.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.toggle('show-modal');
  }
});
