import { data } from './public/data.js';

const testimonials = document.querySelector('.testimonials');
const nextBtn = document.querySelector('.js-next');
const beforeBtn = document.querySelector('.js-before');

let indexOfData = {
    start: 0,
    end: 4
};

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


const appendCard = (data, start, end) => {
    const dataToShow = data.slice(start, end)
    testimonials.innerHTML = '';
    dataToShow.forEach(card => testimonials.appendChild(creatCard(card)));
};

const useWindowWith = (showData) => {
    let {start, end} = showData;
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    if (screenWidth <= 750) {
        end = 1;
        showData = {start, end};
    } else if (screenWidth > 750 && screenWidth <= 1200) {
        end = 2;
        showData = {start, end};
    }

    appendCard(data, start, end);
};

const handleNextData = () => {
    let {start, end} = showData;

    if (end > ) {
        testimonials.innerHTML = '';
        start += end;
        end += end;
        showData = {start, end};
        useWindowWith(showData);
        console.log('next');
    }
    
};
/*
the nex and before handler will only change de indexOfData atributs and call the dataApeend functions.

const handleBeforeData = () => {
    let {start, end} = showData;
    if(star > end) {
        testimonials.innerHTML = '';
        start -= end;
        end -= end;
        showData = {start, end};
        useWindowWith(showData);
        console.log('before');
    }
    
};
*/

//If we try using the index of the array?

nextBtn.addEventListener('click', () => handleNextData());
beforeBtn.addEventListener('click', () => handleBeforeData());
window.addEventListener('load', () => useWindowWith());