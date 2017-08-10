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
        extensions: [ 'multiline','fx-menu-slide','pagedim-black','theme-white'],
        navbar: {
            title: '<img src="img/logo.svg" class="top-line-logo-mmenu" alt="Tutti Studio - съедобные букеты в Нижнем' +
            ' Новгороде">'
        },
        offCanvas: {
            position  : 'right'
        }
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
    $('.callback-phone-mask').mask('0 (000) 000-0000');

    $('.button_catalog').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',


        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});
