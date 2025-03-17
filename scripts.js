// Random Number Generator 

const roll = document.getElementById("rollBtn");
const output = document.getElementById("userResult");

const min = 50;
const max = 100;
let randomNum;

roll.onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min)) + min;    
    output.textContent = randomNum;
}