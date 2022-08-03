$(function () {

    // load
    setTimeout(() => {
        $('.load').addClass('on');
    }, 500);
    setTimeout(function () {
        $('.load').hide();
    }, 1400)

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

})