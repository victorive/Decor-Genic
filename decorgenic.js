$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})