import { data } from './public/data.js';

const testimonials = document.querySelector('.testimonials');
const nextBtn = document.querySelector('.button-next');
const prevBtn = document.querySelector('.button-prev');

const creatCard = (card) => {
    const { name, testimonial, title, headshot } = card;
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    const divImg = document.createElement('img');
    divImg.classList.add('img');
    divImg.setAttribute('src', headshot);
    const descriptionContainerElement = document.createElement('div');
    descriptionContainerElement.classList.add('decription');
    const testimonialElement = document.createElement('h3');
    testimonialElement.innerHTML = testimonial;
    const titleContainerElement = document.createElement('div');
    titleContainerElement.classList.add('titles');
    const nameElement = document.createElement('h2');
    nameElement.innerHTML = name;
    const titleElement = document.createElement('h3');
    titleElement.innerHTML = title;

    titleContainerElement.appendChild(nameElement);
    titleContainerElement.appendChild(titleElement);

    descriptionContainerElement.appendChild(testimonialElement);
    descriptionContainerElement.appendChild(titleContainerElement);

    cardElement.appendChild(divImg);
    cardElement.appendChild(descriptionContainerElement);

    return cardElement;
};

const appendCard = (data) => {
    data.forEach(card => testimonials.appendChild(creatCard(card)));
};

const handleScrowY = (e) => {
  e.preventDefault();
  testimonials.scrollLeft += e.deltaY;
};

const handleBtnscroll = (side) => {
  testimonials.style.scrollBehavior="smooth"
  const screnSize = window.screen.width;
  if(side === 'next'){
    testimonials.scrollLeft += screnSize - (screnSize * 0.23);
  } else {
    testimonials.scrollLeft -= screnSize - (screnSize * 0.23); 
  }

}

window.addEventListener('load', () => appendCard(data));
testimonials.addEventListener('wheel', (e) => handleScrowY(e));
nextBtn.addEventListener('click', () => handleBtnscroll('next'));
prevBtn.addEventListener('click', () => handleBtnscroll('prev'));