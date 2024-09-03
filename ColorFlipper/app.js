const colors = ["green","red","rgba(122,122,200)","#f15025"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    // another function for min max to get random value between
    const randomNumInRange = getRandomNumberInRange(1,100);
    console.log(randomNumInRange);
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

function getRandomNumberInRange(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
}