const showImage = document.querySelector(".show-image");
const allImage  = document.querySelectorAll(".small-image");
const increaseCount = document.querySelector(".plus");
const decreaseCount = document.querySelector(".minus");
const showCount = document.getElementById("show-count");
allImage.forEach((img) =>{
    img.addEventListener("click", () => {
        showImage.src = img.src;
    })
})

let cartCount = 0;

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
