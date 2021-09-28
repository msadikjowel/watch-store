// search button toggle function
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let shoppingBag = document.querySelector('.shopping-bag');

document.querySelector('#shopping-btn').onclick = () => {
    shoppingBag.classList.toggle('active');
}

let menuBar = document.querySelector('.menu-bar');

document.querySelector('#menu-btn').onclick = () => {
    menuBar.classList.toggle('active');
}