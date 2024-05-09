const scriptUrl = 'https://script.google.com/macros/s/AKfycbyGq9dLylN0NLyx_1x3im0fSaTgE7x_flskJpTrk1Q_BDtWTLcRHyp-TrQ63ak9MnaR1g/exec';

const form = document.forms['contact'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
        .then((response) => alert("Mensagem Enviada"))
        .then(response => response.json())
       .then(() => window.location.reload())
       .catch(error => console.error('Error:', error.message));

    form.reset();
});