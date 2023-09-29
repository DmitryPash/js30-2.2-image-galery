
const D = document;
const body = D.querySelector('body')
const QUERY = 'car';
const gallery = D.querySelector('.gallery');

let API;
let searchData = [];


async function photos(QUERY) {
  
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${QUERY}&per_page=20&orientation=landscape&client_id=5OZHsxY-1M2Fk-xUHG0KT4qEQYf307t-aDdJr8rMDtg`);
    let photos = await response.json();
    let list = '';
    console.log(photos)
    photos['results'].forEach((photo) => {
      let imgList = `
       <div class="gallery-item">
          <img alt="${photo.alt_description}" src="${photo.urls.full}"></img>
       </div> 
      `
      list = list + imgList


      searchData.push(photo.alt_description)
    })
      gallery.innerHTML = list;
      

      let gl = D.querySelectorAll('.gallery-item img')
      let search = D.querySelector('.gallery-search')

      search.addEventListener('keyup', (input) => {
        let findInput;

        if(input.target.value == '') {
          gl.forEach((alt) => {
            alt.closest('.gallery-item').style.display = 'block'
          }) 
        } else {
          findInput = searchData.filter((e) => e.indexOf(input.target.value) >= 0)
  
          gl.forEach((alt) => {
            alt.closest('.gallery-item').style.display = 'none'
            if(findInput.includes(alt.alt)) {
              alt.closest('.gallery-item').style.display = 'block'
            }
          }) 
        }
      })
    
  };

let getNewPhoto = D.querySelector('.gallery-find');
let galleryBtn = D.querySelector('.gallery-btn')
getNewPhoto.focus()
galleryBtn.addEventListener('click', () => {
    let newQuery = getNewPhoto.value
    photos(newQuery)
})
getNewPhoto.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let newQuery = getNewPhoto.value
    photos(newQuery)
  }
})
photos(QUERY)


let text = 'zxc'

console.log(text.split('').join(''))