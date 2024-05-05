const theme = document.querySelector('.theme');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const message = document.querySelector('.message');
const sayHi = document.querySelector('.change');


const handleTheme = () => {
    if (theme.innerHTML === 'Light Theme'){
        theme.innerHTML = 'Dark Theme';
        theme.classList.add('lightBtn');
        wrapper.classList.add('lightWapper');
        body.classList.add('ligthTheme');
        sayHi.classList.add('lightBtn');
    } else {
        theme.innerHTML = 'Light Theme';
        theme.classList.remove('lightBtn');
        wrapper.classList.remove('lightWapper');
        body.classList.remove('ligthTheme');
        sayHi.classList.remove('lightBtn');
    }
};

const handleMessage = () => {
    const name = window.prompt("Qual seu nome?")
    message.innerHTML = name;
}

sayHi.addEventListener('click', () => handleMessage())
theme.addEventListener('click', () => handleTheme());