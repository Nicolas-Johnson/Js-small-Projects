const modal = document.querySelector('.js-modal');
const btn = document.querySelector('.openModal');

const openModal = () => {
    modal.classList.toggle('modal');
};

const closeModal = () => {
    modal.classList.add('modal');
};


modal.addEventListener('click', () => closeModal());
btn.addEventListener('click', () => openModal());