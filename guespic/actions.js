"use strict";
let chances = 2;

let playing = true;

let num = Math.trunc(Math.random() * 5) + 1;
document.querySelector(".msg").textContent ="🤩 Click From The Above Image";
document.querySelector(".hmsg").classList.add("hidden");

function won(){
  document.querySelector(".msg").textContent = `😍 Super won the game`;
  document.querySelector(".dog").classList.add("hidden");
  document.querySelector(".lion").classList.add("hidden");
  document.querySelector(".tiger").classList.add("hidden");
  document.querySelector(".eagle").classList.add("hidden");
  document.querySelector(".squeek").classList.add("hidden");
  document.querySelector("body").classList.add("winner")
  document.querySelector("body").classList.remove("lost");
}
function Lost(){
  document.querySelector(".dog").classList.add("hidden");
  document.querySelector(".lion").classList.add("hidden");
  document.querySelector(".tiger").classList.add("hidden");
  document.querySelector(".eagle").classList.add("hidden");
  document.querySelector(".squeek").classList.add("hidden");
  document.querySelector(".answer").classList.add("hidden");
  document.querySelector(".hmsg").classList.add("hidden");  
  document.querySelector("body").classList.add("lost");
  document.querySelector(".answer").classList.remove("hidden");
  document.querySelector(".answer").src="IMAGES/emoji.png";
  document.querySelector(".hint").classList.add("hidden");
}


let imgButton = document.querySelectorAll(".clck");
for(let i =0;i<imgButton.length;i++){
  let val = parseInt(imgButton[i].value);
  imgButton[i].addEventListener("click",function(){
    if(chances<=2&chances>0){
      if(num==val){
        document.querySelector(".answer").src=`IMAGES/${val}.jpg`;
        won();
      }else{
        imgButton[i].classList.add('hidden')
        document.querySelector(".msg").textContent = `🙄 Wrong animal...Try Again`;
        chances--;
        document.querySelector(".val").textContent = chances;
      }
      if(chances==0){
        document.querySelector(".msg").textContent = `😣 Sorry You Lost The Game`;
        Lost();
      }
    }
    
    
  });
}

document.querySelector('.newgame').addEventListener("click",function(){
  num = Math.trunc(Math.random() * 5) + 1;
  chances = 2;
  document.querySelector(".hint").classList.remove("hidden");
  document.querySelector("body").classList.remove("lost");
  document.querySelector("body").classList.remove("winner")
  document.querySelector(".val").textContent = chances;
  document.querySelector(".hmsg").classList.add("hidden");
  document.querySelector(".dog").classList.remove("hidden");
  document.querySelector(".lion").classList.remove("hidden");
  document.querySelector(".tiger").classList.remove("hidden");
  document.querySelector(".eagle").classList.remove("hidden");
  document.querySelector(".squeek").classList.remove("hidden");
  document.querySelector(".answer").classList.remove("hidden");
  document.querySelector(".answer").src = "IMAGES/question mark.jpg";
  document.querySelector(".msg").textContent ="🤩 Choose From The Above Image";
  

});
document.querySelector('.hint').addEventListener("click",function(){
  document.querySelector(".hmsg").classList.remove("hidden");
    if(chances==2){
      document.querySelector(".hmsg").textContent =" 😋 You Should have Only 1 Chance To Activate Hint";  
    } else{
      if(num==1){
        document.querySelector(".hmsg").textContent =" Some Times He Is Cute 😘";
      }else if(num==2){
        document.querySelector(".hmsg").textContent =" 😎 Now He Is Both Domestic And Wild";
      }else if(num==3){
        document.querySelector(".hmsg").textContent =" 🥱 Lazy Guy But Gets Praised";
      }else if(num==4){
        document.querySelector(".hmsg").textContent ="He 🤣 Sings Well....";
      }else{
        document.querySelector(".hmsg").textContent ="Cant 🤨 Catch Him Easily";
      }
    }
    

})