import Modal from './Tabai.js';

const introMygt = document.querySelector('.intro');
const workMygt = document.querySelector('.work');
const aboutMygt = document.querySelector('.about');
const contactMygt = document.querySelector('.contact');

introMygt.addEventListener('click', () => {
  veiksmas(0);
});

workMygt.addEventListener('click', () => {
  veiksmas(1);
});
aboutMygt.addEventListener('click', () => {
  veiksmas(2);
});
contactMygt.addEventListener('click', () => {
  veiksmas(3);
});

function veiksmas(index) {
  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
    
      const itemData = data.tabai[index];
      console.log(itemData);
      const langas = new Modal(itemData);
      console.log(langas);
      document.body.appendChild(langas);
    });
}


