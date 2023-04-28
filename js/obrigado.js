

const resultado = document.querySelector('.resultado')
const numeroVotado = sessionStorage.getItem('dados');

resultado.innerHTML ="Você escolheu " + numeroVotado + " de 5"