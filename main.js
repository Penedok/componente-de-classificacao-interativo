
 const input = document.querySelectorAll('.radio')
 const botao = document.getElementById('botao')
 const notas = document.querySelectorAll(".nota")

input.forEach((item) =>{
   item.addEventListener('click',()=>{
      sessionStorage.setItem('dados', item.value)

       botao.addEventListener('click',() =>{
          window.location ='./obrigado.html'
       })

   })
})

notas.forEach((item)=>{
   item.addEventListener('click', () =>{
      notas.forEach((item) =>{
         item.classList.remove('selecionado');
         item.classList.add('padrao')

      })
   
      if(item.classList.contains('padrao')){
         item.classList.remove('padrao')
         item.classList.add('selecionado')
      }




   })

})
