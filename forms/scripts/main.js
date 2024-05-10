import { username, password, server } from "./secrets.js";

const scriptUrl = 'https://script.google.com/macros/s/AKfycbyGq9dLylN0NLyx_1x3im0fSaTgE7x_flskJpTrk1Q_BDtWTLcRHyp-TrQ63ak9MnaR1g/exec';

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const text = document.getElementById('message').value;

const port = '2525'
const body = `<h1>${name}</h1><br><h1>${email}</h1><br><p>${text}</p>`;

const emailSend = () => {
    Email.send({
        Host : server,
        Username : username,
        Password : password,
        To : username,
        From : username,
        Subject : "Gostaria de contratar seus servicos",
        Body : body
    }).then(
      message => alert(message)
    );
};

const form = document.forms['contact'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailSend();

    const data = new FormData(form);
    console.log(e);
    

    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
        .then((response) => alert("Mensagem Enviada"))
        // .then(response => response.json())
        .then(() => window.location.reload())
        .catch(error => console.error('Error:', error.message));

    form.reset();
});




//https://www.youtube.com/watch?v=jdIntB1J-i8 - Form to GoogleSheet
//https://www.youtube.com/watch?v=8JBl2Ug7P_E - Form to E-mail