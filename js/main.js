
const numeroNota = document.querySelectorAll(".nota");

numeroNota.forEach((numeroNotas =>{
      numeroNotas.addEventListener('click', () =>{
         numeroNota.forEach((numeroNotas) =>{
            numeroNotas.classList.add("padrao");
            numeroNotas.classList.remove('selecionado');
         
         })

         const adiconarCorSelecionada = numeroNotas.classList.add("selecionado");
         const removerCorPadrao = numeroNotas.classList.remove('padrao');

         if(numeroNotas.classList.contains("padrao")){
            removerCorPadrao;
            adiconarCorSelecionada

         }
      })
}))

const input = document.querySelectorAll(".input");
const btn = document.querySelector('.submit');

input.forEach((inputs) =>{

   inputs.addEventListener('click', ()=>{
      sessionStorage.setItem('dados', inputs.value)

      btn.addEventListener("click", () =>{

         if(sessionStorage.getItem('dados')  <="3"){
            window.location = './desculpa.html'
         }else{
            window.location = './obrigado.html'
         }
       

      })

   })
})










