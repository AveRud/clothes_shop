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
//
function redirectToProductDetails() {
    window.location.replace("product-details.html");
}

function redirectToCategoryListing() {
    window.location.replace("category-all.html");
}

// //TODO: change inline function to js code (with contains)
//

// redirect from divs at category-all page
let productsList = document.getElementsByClassName('product');
for (let product of productsList) {
    product.onclick = function () {
        window.location.replace("product-details.html");
    }
}

let sliderFunc = (function () {
    let
        mainElement = document.querySelector('.slider'), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.slider_wrapper'),
        sliderItems = mainElement.querySelectorAll('.slider_item'),
        sliderControls = mainElement.querySelectorAll('.slider_control'),
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
        positionLeftItem = 0,
        transform = 0,
        step = itemWidth / wrapperWidth * 100,
        items = [];
    console.log(mainElement);

    sliderItems.forEach(function (item, index) {
        items.push({item: item, position: index, transform: 0});
    });

    let position = {
        getMin: 0,
        getMax: items.length - 1,
    };

    let transformItem = function (direction) {
        if (direction === 'right') {
            if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
                return;
            }
            positionLeftItem++;
            transform -= step;
        }
        if (direction === 'left') {
            if (positionLeftItem <= position.getMin) {
                return;
            }
            positionLeftItem--;
            transform += step;
        }
        sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    };

    let controlClick = function (e) {
        let direction = this.classList.contains('slider_control_right') ? 'right' : 'left';
        e.preventDefault();
        transformItem(direction);
    };

    let setUpListeners = function () {
        sliderControls.forEach(function (item) {
            item.addEventListener('click', controlClick);
        });
    };


    setUpListeners();

    return {
        right: function () {
            transformItem('right');
        },
        left: function () {
            transformItem('left');
        }
    }
});


let slider = sliderFunc('.slider');





