const modalbtn = document.querySelector(".modal-btn");
const modalovl = document.querySelector(".modal-overlay");
const closebnt =document.querySelector(".close-btn");

modalbtn.addEventListener("click",function(){
    modalovl.classList.add("open-modal");

});

closebnt.addEventListener("click",function(){
    modalovl.classList.remove("open-modal");

});
