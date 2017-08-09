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
});
