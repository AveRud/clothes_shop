let searchBar = document.getElementById('search_bar');
let searchIcon = document.getElementById('search_icon');
let headerList = document.getElementById('header_list');
let headerRightSection = document.querySelector('.header_right_section');
let headerSearchSection = document.querySelector('.header_search_section');
let headerLogo = document.querySelector('.header_logo');

searchIcon.addEventListener('click', function () {
    searchBar.classList.toggle('visible');
    searchIcon.classList.toggle('active');
    searchBar.classList.toggle('search_bar_mobile');
    headerList.classList.toggle('header_list_mobile');
    headerRightSection.classList.toggle('header_right_section_mobile');
    headerSearchSection.classList.toggle('header_search_section_mobile');
    headerLogo.classList.toggle('header_logo_mobile');
});



