
// var songjf = $.noConflict();



$(function () {

    console.log("千信新能源");

    var swiper = new Swiper('.page-content', {
        direction: 'vertical',
        slidesPerView: 1,
        slideClass: 'page-slide',
        wrapperClass: 'page-wrapper',
        spaceBetween: 0,
        mousewheel: true,
        keyboard: {
            enabled: true,
        },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChange: function () {
                qie(this.activeIndex);
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                if (this.activeIndex == 6) {
                    this.mousewheel.disable();
                } else {
                    this.mousewheel.enable();
                }
            }
        },
        pagination: {
            el: '.page-pagintion',
            clickable: true,
        },
        speed: 500,
        'Coverflow Effect': 'true'
    });

    // swiper.slideTo(2)
    // $('#num1').countUp({
    //     delay: 10,
    //     time: 2000
    // });

    function qie(page_index) {
        if (page_index != 0) {
            // swiperone.autoplay.stop();
            $('nav').addClass('on');
        } else {
            // swiperone.autoplay.start();
            $('nav').removeClass('on');
        }
        if (page_index === 1) {
            setTimeout(() => {
                $('#num1').countUp({
                    delay: 10,
                    time: 2000
                });
                $('#num2').countUp({
                    delay: 10,
                    time: 2000
                });
                $('#num3').countUp({
                    delay: 10,
                    time: 2000
                });
                $('#num4').countUp({
                    delay: 10,
                    time: 2000
                });
                $('#num5').countUp({
                    delay: 10,
                    time: 2000
                });
            }, 2000);
        }
    }

    setTimeout(() => {
        $('.load').addClass('on');
    }, 500);
    setTimeout(function () {
        $('.load').hide();
    }, 1400)

    // swiper-fade
    var swiperone = new Swiper('#swiper-ban', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '#swiper-ban .swiper-button-next',
            prevEl: '#swiper-ban .swiper-button-prev',
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 7000,
            stopOnLastSlide: false,
        },
        on: {
            slideChange: function () {
                banqie(this.activeIndex)
            },
        },
        loop: true,
        speed: 2000
    });


    function banqie(index) {
        let video = document.querySelector('#vid')
        if (!video) return
        if (index === 4) {
            video.currentTime = 0
            video.play();
        } else {
            video.pause();
        }
    }

    // menu

    $('.menu').click(function () {
        $('.wrap').fadeToggle(500);
        $('.wrap').toggleClass('on');
    })

    var b = new Swiper('.b4 .on #b', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.b4 .on #b .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 5000,
            stopOnLastSlide: false,
        },
        loop: true,
        speed: 2000
    });


    $('.b33 li').hover(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.b4 .b5').eq($(this).index()).addClass('on').siblings().removeClass('on')
        new Swiper('.b4 .on #b', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.b4 .on #b .swiper-pagination',
                clickable: true,
            },
            autoplay: {
                disableOnInteraction: false,
                delay: 5000,
                stopOnLastSlide: false,
            },
            loop: true,
            speed: 2000
        });
    })

    $('.c3 li').hover(function () {
        $(this).addClass('on').siblings().removeClass('on')
    })

    $('#map').hover(function () {
        swiper.allowTouchMove = false
    }, function () {
        swiper.allowTouchMove = true
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

    if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
        $('#vid').remove()
    }

    // var swipercp = new Swiper('#swipercp', {
    // 	slidesPerView: 3,
    // 	spaceBetween: 40,
    // 	navigation: {
    // 		nextEl: '.cp .lef .qie .right',
    // 		prevEl: '.cp .lef .qie .left',
    // 	},
    // 	autoplay: {
    // 		disableOnInteraction: false,
    // 		delay: 7000,
    // 		stopOnLastSlide: false,
    // 	},
    // 	loop: true,
    // 	speed: 500
    // });

    // var swipercp2 = new Swiper('#swipercp2', {
    // 	slidesPerView: 3,
    // 	spaceBetween: 30,
    // 	navigation: {
    // 		nextEl: '#swipercp2 .next',
    // 		prevEl: '#swipercp2 .prev',
    // 	},
    // 	pagination: {
    // 		el: '#swipercp2 .swiper-pagination',
    // 		clickable: true,
    // 	},
    // 	autoplay: {
    // 		disableOnInteraction: false,
    // 		delay: 7000,
    // 		stopOnLastSlide: false,
    // 	},
    // 	loop: true,
    // 	speed: 500
    // });

    // $('.gotop').click(function() {
    //     $('body,html').animate({
    //             scrollTop: 0
    //         },
    //         500);
    //     return false;
    // })

    // $(window).scroll(function() {
    //     $('.gotop').stop();
    //     if ($(window).scrollTop() > 200) {
    //         $('.gotop').slideDown();
    //     } else {
    //         $('.gotop').slideUp();
    //     }
    // });

    // window.onresize = function() {
    //     ksdhli()
    // }


    // swiper-vertical-top
    // var swiper = new Swiper('#swiper2', {
    // 	direction: 'vertical',
    // 	slidesPerView: 6,
    // 	spaceBetween: 0,
    // 	autoplay: {
    // 		disableOnInteraction: false,
    // 		delay: 1000,
    // 		stopOnLastSlide: false,
    // 	},
    // 	loop: true,
    // 	speed: 1000,
    // });





    // swiper-left
    // var swiper = new Swiper('#swiper3', {
    // 	slidesPerView: 3,
    // 	spaceBetween: 23,
    // 	autoplay: {
    // 		disableOnInteraction: false,
    // 		delay: 5000,
    // 		stopOnLastSlide: false,
    // 	},
    // 	navigation: {
    // 		nextEl: '.hd-lb .left',
    // 		prevEl: '.hd-lb .right',
    // 	},
    // 	loop: true,
    // 	speed: 1000
    // });




    // 复制
    // function fuzhi() {
    //     var Url2 = document.getElementById("wechat-a17").innerText;
    //     var oInput = document.createElement('input');
    //     oInput.value = Url2;
    //     document.body.appendChild(oInput);
    //     oInput.select();
    //     document.execCommand("Copy");
    //     oInput.className = 'oInput';
    //     oInput.style.display = 'none';
    // }




    // 倒计时
    // function djs(){
    //     var InterValObj;
    //     var count = 300;
    //     var curCount;

    //     function sendMessages() {
    //         curCount = count;
    //         console.log(curCount);
    //         //一秒执行一次
    //         InterValObj = window.setInterval(SetRemainTimes, 1000);
    //     }

    //     function SetRemainTimes() {
    //         if (curCount == 0) {
    //             //倒计时完毕
    //             window.clearInterval(InterValObj);
    //             $('.veri .yz button').removeAttr("disabled");
    //             $('.veri .yz button').css("cursor", "pointer");
    //             $('.veri .yz button span').text("获取验证码");
    //         } else {
    //             //倒计时
    //             curCount--;
    //             $('.veri .yz button span').text("" + curCount + "秒后获取");
    //             $('.veri .yz button').css("cursor", "not-allowed");
    //             $('.veri .yz button').attr("disabled", "not-allowed");
    //         }
    //     }

    //     //调用
    //     sendMessages();
    // }




    // 判断手机电脑端
    // if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    //     $(".header1").hide();
    // }




    // title提示框美化设置
    // var sweetTitles = {
    //     x: 10,
    //     y: 20,
    //     tipElements: "a,span,img,div ",
    //     noTitle: false,
    //     init: function() {
    //         var b = this.noTitle;
    //         $(this.tipElements).each(function() {
    //             $(this).mouseover(function(e) {
    //                 if (b) {
    //                     isTitle = true
    //                 } else {
    //                     isTitle = $.trim(this.title) != ''
    //                 }
    //                 if (isTitle) {
    //                     this.myTitle = this.title;
    //                     this.title = "";
    //                     var a =
    //                         "<div class='tooltip'><div class='tipsy-arrow tipsy-arrow-n'></div><div class='tipsy-inner'>" +
    //                         this.myTitle + "</div></div>";
    //                     $('body').append(a);
    //                     $('.tooltip').css({
    //                         "top": (e.pageY + 20) + "px",
    //                         "left": (e.pageX - 20) + "px"
    //                     }).show('fast')
    //                 }
    //             }).mouseout(function() {
    //                 if (this.myTitle != null) {
    //                     this.title = this.myTitle;
    //                     $('.tooltip').remove()
    //                 }
    //             }).mousemove(function(e) {
    //                 $('.tooltip').css({
    //                     "top": (e.pageY + 20) + "px",
    //                     "left": (e.pageX - 20) + "px"
    //                 })
    //             })
    //         })
    //     }
    // };
    // $(function() {
    //     sweetTitles.init()
    // });





    //禁止按f12调试
    // document.onkeydown = function() {
    //     if (window.event && window.event.keyCode == 123) {
    //         alert("谢谢合作!");
    //         event.keyCode = 0;
    //         event.returnValue = false;
    //     }
    //     if (window.event && window.event.keyCode == 13) {
    //         window.event.keyCode = 505;
    //     }
    //     if (window.event && window.event.keyCode == 8) {
    //         alert(str + "\n请使用Del键进行字符的删除操作！");
    //         window.event.returnValue = false;
    //     }
    // }
    // //禁止页面右键
    // document.oncontextmenu = function() {
    //     //alert("谢谢合作!");
    //     event.returnValue = false;
    // }




    // 取消默认行为冒泡事件
    // function stopDefault(e) {
    //     if (e.preventDefault) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     } else {
    //         window.event.returnValue = false;
    //         e.cancelBubble = true;
    //     }
    //     return false;
    // }





    //开放滚动
    // 	function startwheel() {
    // 		document.querySelector(".yucai").removeEventListener('DOMMouseScroll', function(e) {
    // 			var e = e || window.event;
    // 			stopDefault(e);
    // 		}, false);
    // 		document.querySelector(".yucai").onmousewheel = null;
    // 	}

    // 	//禁用滚动
    // 	function stopwheel() {
    // 		var str = window.navigator.userAgent.toLowerCase();
    // 		if (str.indexOf('firefox') !== -1) { //火狐浏览器
    // 			document.querySelector(".yucai").addEventListener('DOMMouseScroll', function(e) {
    // 				var e = e || window.event;
    // 				//阻止窗口默认的滚动事件
    // 				stopDefault(e);
    // 			}, false);
    // 		} else { //非火狐浏览器
    // 			document.querySelector(".yucai").onmousewheel = function(ev) {
    // 				var e = ev || window.event;
    // 				stopDefault(e);
    // 			};
    // 		}
    // 	}





    //获取url链接？后面的参数
    //例：gh.html?hospitalCode=1&deptCode=63102
    // 	function GetRequest() {
    // 		var url = location.search;
    // 		var theRequest = new Object();
    // 		if (url.indexOf("?") != -1) {
    // 			var str = url.substr(1);
    // 			strs = str.split("&");
    // 			for (var i = 0; i < strs.length; i++) {
    // 				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    // 			}
    // 		}
    // 		return theRequest;
    // 	}
    // 	var Request = GetRequest();

    // 	var hospitalCode = Request["hospitalCode"];

    // 	var deptCode = Request["deptCode"];

})