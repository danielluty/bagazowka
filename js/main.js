/* Navigation */

$(function () {

    // Nav toggler
    $('.hb-button')
        .click(function () {
            $('.nav-ul').slideToggle();
        });

    $('.nav-ul a, .logo').click(function () {
        $('.nav-ul').slideUp();
    })

    // Smooth scrolling
    $('a[href*="#"]').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

/* *** Cennik Transportow *** */

let formTrans = document.getElementById('form-trans');

formTrans.addEventListener('submit', e => {
    e.preventDefault();

    let cena = 0;
    let km = document.getElementById('km').value;
    let cenaTrans = document.getElementById('cenaTrans');
    let poleCena = document.querySelector('.cena-trans');

    if (km > 0 && km < 10000) {
        km = km - 3;
        cena = km * 5 + 50;
        poleCena.style = 'display: block;'
        cenaTrans.innerHTML = `${cena} zł`;
        
    } else {
        cenaTrans.innerHTML = 'Podaj poprawną wartość';
        km = 0;
    }
})

/* *** Cennik Przeprowadzek *** */

const formPrzep = document.getElementById('form-przep');

formPrzep.addEventListener('submit', e => {
    e.preventDefault();

    let cena = 0;
    let hours = document.getElementById('hours').value;
    let workers = document.querySelector('#workers').value;
    let cenaPrzep = document.getElementById('cenaPrzep');
    let poleCena = document.querySelector('.cena-przep');

    cena = hours * workers;
    
    poleCena.style = 'display: block;'
    cenaPrzep.innerHTML = `${cena} zł`;
})