import { data } from './data.js';

const article = document.querySelector('.wrapper');

const createFaqs = (faq) => {
    const { question, answer } = faq;
    const faqElement = document.createElement('details');
    const faqQuestion = document.createElement('summary');
    const faqAnswer = document.createElement('p');
    faqAnswer.innerHTML = `${answer}`;
    faqQuestion.innerHTML = `${question}`;
    faqElement.appendChild(faqQuestion);
    faqElement.appendChild(faqAnswer);

    return faqElement;
};

const apendQuestions = () => {
    data.forEach(faq => article.appendChild(createFaqs(faq)));
};

window.addEventListener('load', () => apendQuestions());