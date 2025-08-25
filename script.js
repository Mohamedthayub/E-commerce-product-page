const showImage = document.querySelector(".show-image");
const allImage  = document.querySelectorAll(".small-image");
const increaseCount = document.querySelector(".plus");
const decreaseCount = document.querySelector(".minus");
const showCount = document.getElementById("show-count");
const cardContainer = document.querySelector(".card-container");
const addtoCartButton = document.querySelector(".add-to-cart-btn");
const cardLogo = document.querySelector(".cart-logo");

let cartCount = 0;
let price 

allImage.forEach((img) =>{
    img.addEventListener("click", () => {
        showImage.src = img.src;
    })
})

cardLogo.addEventListener("click",() => {
    cardContainer.classList.toggle("show");
})

increaseCount.addEventListener("click",() => {
    cartCount++;
    showCount.innerText = cartCount;
})
decreaseCount.addEventListener("click",() => {
    if(cartCount < 1){
        cartCount = 0
    }
    else{
        cartCount--;
    }
    showCount.innerText = cartCount;
})

