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


fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    data.tabai.forEach(jKort => {
      const num = jKort.id;
      const apie = jKort.about;
      const fotke = jKort.source;
      console.log(jKort);
=======
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

// const openTabMygt = document.querySelector('#open');
// const tabs = document.querySelector('#tabas');



// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => {
//     data.tabai.forEach(jKort => {
//       const num = jKort.id;
//       const apie = jKort.about;
//       const fotke = jKort.source;
//       console.log(jKort);

//       open.addEventListener('click', () => {
//       document.body.append(new Modal(jKort));
    
//       });
//     });
//   });

// open.addEventListener('click', function() 



//   const tabDiv = document.createElement('div');
//   tabDiv.classList.add('tabMod');

//   const img = document.createElement('img');
//   img.setAttribute('src', 'path/to/image.jpg');

//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Lorem ipsum dolor sit amet.';

//   tabDiv.append(img, paragraph);

//   tabs.appendChild(tabDiv);

//  
//   });
// });
// });
