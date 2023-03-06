const swiper = new Swiper('.bromo__slider', {
    speed: 650,
    loop: true,
    navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});