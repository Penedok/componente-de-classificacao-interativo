
function resultadoTela(){
    const resultado = document.querySelector('.resultado')
    const numeroVotado = sessionStorage.getItem('dados');

    resultado.innerHTML ="Você escolheu " + numeroVotado + " de 5";

    const sairTela = document.querySelector('.sair');

    sairTela.addEventListener('click',()=>{
   window.location.href ="https://www.google.com/"
    })
}

resultadoTela()
