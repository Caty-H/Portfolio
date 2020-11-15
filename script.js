$('.hamburger-menu').click(function() {
    $( '.toggle' ).toggleClass('open');
    $( '.nav-list' ).toggleClass('open');
});


$('.nav-list a').on('click', function () {
    $('.nav-list').removeClass('open');
});
