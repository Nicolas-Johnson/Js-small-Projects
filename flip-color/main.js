const body = document.querySelector('body');
const tryBtn = body.querySelector('.try');
const color = body.querySelector('.color');

const getRanHex = () => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < 8; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
}

const handleBackGrownd = () => {
    const textCalor = getRanHex();
    body.style.backgroundColor = `#${textCalor}`;
    color.innerHTML = `#${textCalor}`;

};

tryBtn.addEventListener('click', () => handleBackGrownd());