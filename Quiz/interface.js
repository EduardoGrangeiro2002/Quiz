let btnErro =  "btn-danger" 

let btnAcerto = "btn-success"

let X = 0;

let y = 2

let Z = 1

let Pontuação = 0;




function Check(element){
     if(element.id == 0 && X == 0){
     
        element.classList.remove("btn-light")
        element.classList.add(btnErro)
        X = 1; 

     }
     if(element.id == 10 && X == 0){
        element.classList.remove("btn-light")
        element.classList.add(btnAcerto)
        X = 1; 
        Pontuação++; 
        
     }

}

function Next(){
   if(X == 1){
      let MyBlock = document.getElementById("Bloco" + y)
      let beforeBlock = document.getElementById('Bloco' + Z)
      beforeBlock.classList.remove("active")
      beforeBlock.classList.add("fade")
      MyBlock.classList.remove('fade')
      MyBlock.classList.add('active')
      X = 0;
      y +=1;
      Z +=1;

   }else{
      alert("Por favor selecione uma das opçôes")

   }
}

function End(){
  let ScreenEnd = document.getElementById('Bloco11');
  let MyText = document.getElementById('Texto');
  ScreenEnd.classList.remove('fade')
  ScreenEnd.classList.remove('d-none')
  ScreenEnd.classList.add("d-block")
  ScreenEnd.classList.add("active")
  MyText.innerHTML = "Parabéns você completou o Quiz e acertou um total de: " + Pontuação + " Questões"
}

