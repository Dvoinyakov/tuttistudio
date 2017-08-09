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
        $('.catalog-apple').css('top',((0+(ypos/50))+"px"));
        $('.catalog-grape').css('bottom',(( 0+(xpos/30))+"px"));
    });

});
