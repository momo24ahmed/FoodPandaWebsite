let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function addToCart(itemName, itemPrice) {
    // Create an object to represent the item
    var item = {
        name: itemName,
        price: itemPrice
    };

    // Check if 'cart' exists in local storage
    if(localStorage.getItem('cart')) {
        // If cart exists, parse its value and add the new item
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        // If cart doesn't exist, create a new one and add the item
        var cart = [item];
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Notify the user that the item has been added to the cart
    alert('Item added to cart!');
}