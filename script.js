const showImage = document.querySelector(".show-image");
const allImage  = document.querySelectorAll(".small-image");
const increaseCount = document.querySelector(".plus");
const decreaseCount = document.querySelector(".minus");
const showCount = document.getElementById("show-count");
const cardContainer = document.querySelector(".cart-container");
const addtoCartButton = document.querySelector(".add-to-cart-btn");
const cardLogo = document.querySelector(".cart-logo");
const cartImage = document.querySelector(".cart-image");
const cartDetails = document.querySelector(".cart-detail");
const deleteCart = document.querySelector(".dlt-cart");
const checkOutButton = document.querySelector(".checkout-btn");
let cartCount = 0;
let price  = 125.00;
if(cartCount == 0){
       cartDetails.innerText = "Your cart is empty";
        cartImage.style.display = "none"
        deleteCart.style.display = "none";
        checkOutButton.style.display = "none";
    
}
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

function cartEmpty(){
    cartDetails.innerText = "Your cart is empty";
    cartImage.style.display = "none"
    deleteCart.style.display = "none";
    checkOutButton.style.display = "none";
}
addtoCartButton.addEventListener("click",() => {
    addToCart(cartCount,price,showImage.src);
})

function addToCart(count,price,image){
    let sum = count * price;
    if(count == 0){
        cartEmpty();
  
    }
    else{
        cartImage.style.display = "block";
        checkOutButton.style.display = "block";
        deleteCart.style.display = "block";
        cartImage.src = image;
        cartDetails.innerText = `Fall Limited Edition Sneakers $${price} × ${count} = $${sum}`;
        deleteCart.src = "images/icon-delete.svg";
    }   
}


deleteCart.addEventListener("click",() => {
    sum  = 0; 
    cartCount = 0;
    showCount.innerText =cartCount;
    cartEmpty();
})
