let sliderFunc = (function () {
    return function (selector) {
        let
            mainElement = document.querySelector(selector), // основный элемент блока
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

    }
}());


let slider = sliderFunc('.slider');
