const hex = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.querySelector(".btn--flip");
const color = document.querySelector("#color");
const textHex = document.querySelector("#hex");



btn.addEventListener('click', function(){

    function getRandomNumber(){
        return Math.floor(Math.random() * hex.length);
    }

    let hexColor = "#";

    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    document.querySelector(".main").style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
    textHex.style.color = hexColor;
});

