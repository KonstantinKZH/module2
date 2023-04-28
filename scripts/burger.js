const BURGER_OPENED_CLASSNAME = 'burger_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';
const BURGER_CROSS = 'burger_cross';
// const ITEM__BURGER = document.getElementsByClassName("item__burger");
// const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content');
const burgerCrossNode = document.querySelector('.js-burger-cross-btn');

burgerBtnNode.addEventListener('click', toggleBurger);
burgerCrossNode.addEventListener('click', toggleBurger);



burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
});

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_CROSS);
};

// Закрывает бургер при клике по элементам бургера
document.getElementById("burger_elements").onclick = function(e){
    const target = e.target;
    console.log(target);
    if(target.classList.contains("item__burger")){
        burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
        bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
        burgerBtnNode.classList.toggle(BURGER_CROSS);
    };
};
