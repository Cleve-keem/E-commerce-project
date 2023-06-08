const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const cartBtn = document.querySelector(".cart-btn");
const Menu = document.querySelector(".nav-items");
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(".lightBox-container .main-thumbnail");
const plusBtn = document.querySelector("#plus");
const minsBtn = document.querySelector("#minus");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const images = document.querySelector(".preview img");
const amount = document.querySelector(".amount");
const slider = document.querySelector(".mobile-thumb");
const thumbMub = document.querySelector(".thumb-mob");
const cart = document.querySelector(".cart-container");
const closeLIghtBtn = document.querySelector(".close-lightbox");
const LIghtBox = document.querySelector(".lightbox");
const addBtn = document.querySelector(".add-btn");
const indicator = document.querySelector(".cart-indicator");
const cartMessage = document.querySelector(".cart-message-box");

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function OpenMenu() {
    Menu.classList.add("active");
    overlay.classList.add("active");
}
closeMenu.addEventListener('click', () => {
    Menu.classList.remove('active');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', () =>{
    Menu.classList.remove('active')
    overlay.classList.remove('active');
});
function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}
function handleMinus() {
    if (amountValue > 0){
        amountValue--;
    }
    amount.innerText = amountValue;
}
function NextImg (){
    if (currentImg == 4){
        currentImg = 1;
    }
    else{
        currentImg++;
    }
    thumbMob.src='./images/image-product-${currentImg}.jpg'
}
