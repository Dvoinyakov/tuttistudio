$(function() {

    $(".slider-items").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        smartSpeed: 700,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });


     $("#my-menu").mmenu({
        pageScroll: {
            scroll:true
        },
        extensions: ['multiline','fx-menu-slide','pagedim-black','theme-white'],
        navbar: {
            title: '<img src="img/logo.svg" class="top-line-logo-mmenu" alt="Tutti Studio - съедобные букеты в Нижнем' +
            ' Новгороде">'
        },
        offCanvas: {
            position  : 'right'
        }
    });

    //Костыль, чтобы ебанное мменю закрывалось и все нахуй листалось к якорям.
    var API = $("#my-menu").data( "mmenu" );
    $(".about_link").click(function (){
        API.close();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $(".catalog_link").click(function (){
        API.close();
        $('html, body').animate({
            scrollTop: $("#catalog").offset().top
        }, 1500);
    });

    $(".opinion_link").click(function (){
        API.close();
        $('html, body').animate({
            scrollTop: $("#opinion").offset().top
        }, 1500);
    });

    $(".contact_link").click(function (){
        API.close();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });

    $(window).mousemove(function(e) {
        var change;
        var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
        var  xpos=xpos*2;ypos=ypos*2;
        $('.catalog-apple').css('top',((100+(ypos/50))+"px"));
        $('.catalog-grape').css('bottom',(( 0+(xpos/50))+"px"));
    });

        //E-mail Ajax Send
        $("form.callback").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "/mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
                setTimeout(function() {
                    $(th).find('.success').removeClass('active').fadeOut();
                    th.trigger("reset");
                }, 3000);
            });
            return false;
        });


        $("form.catalog-popup").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
                $.magnificPopup.proto.close.call(this);
            }, 3000);
        });
        return false;
    });



    $('.callback-time-mask').mask('00:00');
    $('.callback-phone-mask').mask('8 (000) 000-0000');

    $('.button_catalog').magnificPopup({
        type: 'inline',
        preloader: true,
        focus: '.callback-name-mask',


        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '.callback-name-mask';
                }
            }
        }
    });
    $('.button_callback').magnificPopup({
        type: 'inline',
        preloader: true,
        focus: '.callback-name-mask',


        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '.callback-name-mask';
                }
            }
        }
    });
    $('.button_slider').magnificPopup({
        type: 'inline',
        preloader: true,
        focus: '.callback-name-mask',


        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '.callback-name-mask';
                }
            }
        }
    });


   $("a.sm_jh").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    $('.slider').css('display', 'none');
    $(window).on('load', function() {

        $('.preloader').delay(500).fadeOut('slow');
        setTimeout(function() {
            $('.slider').css('display', 'block');
        }, 500);



    });

    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass("active");


        } else {
            $('.top').removeClass("active");
        }
    });


});
