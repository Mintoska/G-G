import Modal from './data.json';

const openTabBtn = document.querySelector('#open');
const tabs = document.querySelector('#tabas');



fetch('../scripts/data.json')
  .then(response => response.json())
  .then(data => {
    data.tabai.forEach(jKort => {
      const num = jKort.id;
      const apie = jKort.about;
      const fotke = jKort.source;

      open.addEventListener('click', () => {
      document.body.append(new Modal(jKort));
    
      });
    });
  });

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
