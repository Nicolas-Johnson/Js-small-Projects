import { conteudo } from './content.js';

const wrapper = document.querySelector('.wrapper');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');

const creatSection = (object) => {
    const {id, title, text, className} = object;
    const section = document.createElement('section');
    section.classList.add(className);
    section.id = id;
    section.innerHTML = `
        <h1>${title}</h1>
        <p>${text}</p>
    `;
    console.log(section);
    return section;
}

const appendSection = (sectionObject) => {
    const section = creatSection(sectionObject);
    wrapper.innerHTML = '';
    wrapper.appendChild(section);
};

label1.addEventListener('click', () => appendSection(conteudo[0]));
label2.addEventListener('click', () => appendSection(conteudo[1]));
label3.addEventListener('click', () => appendSection(conteudo[2]));
