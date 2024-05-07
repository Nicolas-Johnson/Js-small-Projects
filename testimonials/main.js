import { data } from './public/data.js';

const testimonials = document.querySelector('.testimonials');

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

const useWindowWith = () => {
    testimonials.innerHTML = '';
    appendCard(data);
};

window.addEventListener('resize', () => useWindowWith());