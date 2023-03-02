//Adding images to an array
let diceImages =["dice1", "dice2", "dice3","dice4","dice5","dice6"];


//diceImages[Math.floor(Math.random()*7)]
//targeting each img src

const firstDice = document.querySelector(".img1").src ="./images/"+diceImages
[Math.floor(Math.random()*6)]+".png";

const secondDice = document.querySelector(".img2").src = "./images/"+diceImages
[Math.floor(Math.random()*6)]+".png";

if(firstDice > secondDice){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else if(secondDice > firstDice){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw";
}