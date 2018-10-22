/* Navigation */

$(function () {

    // Nav toggler
    $('.hb-button').click(function() {
        $('.nav-ul').slideToggle();
    });

    $('.nav-ul a, .logo').click(function() {
        $('.nav-ul').slideUp();
    })

    // Smooth scrolling
    $('a[href*="#"]').click(function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});