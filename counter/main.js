const body = document.querySelector('body');
const plusBtn = document.querySelector('.plus');
const lessBtn = document.querySelector('.less');
const counter = document.querySelector('.counter');
//hwb(120 22% 7%);
let increment = 0;
const handleCounterUpAndDown = (direction) => {
    if(direction === 'plus') {
        if(increment < 100) {
            increment += 1;
            counter.innerHTML = increment;
            body.style.backgroundColor = `hwb(${120 + increment *10} 22% 7%)`;
        }
    } else if(direction === 'less') {
        if(increment > 0) {
            increment -= 1;
            counter.innerHTML = increment;
            body.style.backgroundColor = `hwb(${120 - increment *10} 22% 7%)`;
        }
    }

};


plusBtn.addEventListener('click', () => handleCounterUpAndDown('plus'));
lessBtn.addEventListener('mousedown', () => handleCounterUpAndDown('less'));
