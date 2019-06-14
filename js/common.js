let searchBar = document.getElementById('search_bar');
let searchIcon = document.getElementById('search_icon');
let headerList = document.getElementById('header_list');
let headerRightSection = document.querySelector('.header_right_section');
let headerSearchSection = document.querySelector('.header_search_section');
let headerLogo = document.querySelector('.header_logo');

searchIcon.addEventListener('click', function () {
    if (!searchBar.value || searchBar.value === 'Search something') {
        searchBar.classList.toggle('visible');
        searchIcon.classList.toggle('active');
        searchBar.classList.toggle('search_bar_mobile');
        headerList.classList.toggle('header_list_mobile');
        headerRightSection.classList.toggle('header_right_section_mobile');
        headerSearchSection.classList.toggle('header_search_section_mobile');
        headerLogo.classList.toggle('header_logo_mobile');
    } else {
        window.location.replace("category-all.html");
    }
});

function redirectToProductDetails() {
    window.location.replace("product-details.html");
}

function redirectToCategoryListing() {
    window.location.replace("category-all.html");
}

//TODO: change inline function to js code (with contains)

// let mainPhotos = document.getElementsByClassName('main_photo');
// let mainText = document.getElementsByClassName('main_photo_text');


// redirect from divs at category-all page
let productsList = document.getElementsByClassName('product');
for (let product of productsList) {
    product.onclick = function () {
        window.location.replace("product-details.html");
    }
}






