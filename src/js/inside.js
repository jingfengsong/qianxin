$(function () {

    // load
    setTimeout(() => {
        $('.load').addClass('on');
    }, 500);
    setTimeout(function () {
        $('.load').hide();
        $('body').removeClass('bodyhid')
    }, 1400)

    // menu

    $('.menu').click(function () {
        $('.wrap').fadeToggle(500);
        $('.wrap').toggleClass('on');
    })

    let invoke = true;
    $('.sou').hover(function (event) {
        var e = event || window.event;
        invoke = true;
        e.preventDefault();
        e.stopPropagation();
        $('.cd-popup').addClass('is-visible');
        // $('body').css({
        //     "height": "100%",
        //     "overflow": "hidden"
        // })
    });

    $('.cd-popup-container').click(function (event) {
        var e = event || window.even;
        e.stopPropagation();
    });

    $(document).click(function (event) {
        $('.cd-popup').removeClass('is-visible');
        // $('body').css({
        //     "height": "auto",
        //     "overflow": "auto"
        // })
        invoke = false;
    });

    $('.cd-popup-close').click(function (event) {
        $('.cd-popup').removeClass('is-visible');
        // $('body').css({
        //     "height": "auto",
        //     "overflow": "auto"
        // })
        invoke = false;

    });

    // 产业
    if ($('#cy1').length > 0) {
        new Swiper('#cy1', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 20,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.cy1rig',
                prevEl: '.cy1lef',
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            },
            autoplay: {
                disableOnInteraction: false,
                delay: 7000,
                stopOnLastSlide: false,
            },
        });
    }

    if ($('#cy2').length > 0) {
        new Swiper('#cy2', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: "3%",
            loop: true,
            speed: 1000,
            breakpoints: {
                768: {
                }
            },
            autoplay: {
                disableOnInteraction: false,
                delay: 5000,
                stopOnLastSlide: false,
            },
        });
    }

    // 党建
    if ($('#dj1').length > 0) {
        new Swiper('#dj1', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                disableOnInteraction: false,
                delay: 6000,
                stopOnLastSlide: false,
            },
            pagination: {
                el: '#dj1 .swiper-pagination',
                clickable: true,
            },
            loop: true,
            speed: 500
        });
    }

    if ($('.dang').length > 0) {
        console.log('yes')
        $('html,body').addClass('scrollbg')
    }

})