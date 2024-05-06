import { conteudo } from './content.js';

const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.sticky');
const lable1 = document.querySelector('#lable1');
const lable2 = document.querySelector('#lable2');
const lable3 = document.querySelector('#lable3');

const creatParagraph = (string) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = string;
    return paragraph;
}

const creatSection = (object) => {
    const {id, title, text, className} = object;
    const section = document.createElement('section');
    section.classList.add(className);
    section.id = id;
    section.innerHTML = `<h1>${title}</h1>`;
    text.forEach(paragraph => {section.appendChild(creatParagraph(paragraph))})
    // console.log(section);
    return section;
}

const appendSection = (e, sectionObject) => {
    const section = creatSection(sectionObject);
    const link = e.target;
    const links = nav.querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));
    link.classList.toggle('active');
    wrapper.innerHTML = '';
    wrapper.appendChild(section);
};

lable1.addEventListener('click', (e) => appendSection(e, conteudo[0]));
lable2.addEventListener('click', (e) => appendSection(e, conteudo[1]));
lable3.addEventListener('click', (e) => appendSection(e, conteudo[2]));
