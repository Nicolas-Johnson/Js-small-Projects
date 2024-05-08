import { images } from './public/data.js';

const list = document.querySelector('.list');
// const items = document.querySelectorAll('.itm');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let active = 0;

const createImg = string => {
    const item = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', string);
    item.classList.add('itm');
    item.appendChild(image);

    return item;
};

function removesBlock(e){
    e.style.opacity = 0;
    e.style.height = 0;
    setTimeout(()=>{
      e.style.display = "none"
    },255)
  }

const apendImg = () => {
    list.innerHTML = '';
    list.appendChild(createImg(images[active]));    
};

const createDot = () => {
    dotsContainer.innerHTML = '';
    images.forEach(() => {
        const dot = document.createElement('li');
        dotsContainer.appendChild(dot);
    });
    handleActiveDot();
};

const handleActiveDot = () => {
    const dots = document.querySelectorAll('li');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[active].classList.add('active');
};

const nextImg = () => {
    if (active < images.length -1) {
        active += 1;
        apendImg();
        handleActiveDot();
    } else if (active === images.length - 1) {
        active = 0;
        apendImg();
        handleActiveDot();
    }
};

const prevImg = () => {
    if(active >= 1) {
        active -= 1;
        apendImg();
        handleActiveDot();
    } else if (active === 0) {
        active = images.length - 1;
        apendImg();
        handleActiveDot();
    }
};

window.addEventListener('load', () => {
    apendImg();
    createDot();
});

nextBtn.addEventListener('click', () => nextImg());
prevBtn.addEventListener('click', () => prevImg());