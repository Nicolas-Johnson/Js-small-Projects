const navElement = document.querySelector('.sticky');
const navLinks = navElement.querySelectorAll('a');

const navposition = navElement.getBoundingClientRect().top;


const handleScrollPage = () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const sectionElement = document.querySelector(link.hash);
        const offSet = 100;

        if(scrollPosition + offSet > sectionElement.offsetTop && scrollPosition + offSet < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', () => handleScrollPage());
