function moveRandomElem(elem) {
  elem.style.position = 'absolute';
  elem.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  elem.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

const noButton = document.querySelector('#no-btn');

noButton.addEventListener('click', (e) => {
  moveRandomElem(e.target);
});