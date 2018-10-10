"use strict"
$(document).ready(function (){
    buildMenu(menuItems);
    $('a').click(function() {
        console.log('BUM!')
        $('#navbarSupportedContent > ul > li > a').removeClass('active');
        // pasirasyti if'a kuris patikrintu ar as nespaudziu and logotipo ir jei spaudziu, akd uzsetintu pradiniam linkui ACTIVE

        $(this).addClass('active')
    });
});

$( window ).on( "load", function() {
    $('section#about').html('<h2>SUDIEV</h2>');
    $('section:gt(1)').append('<h2>PRIVIET</h2>');
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        solidNavigation();
    }
    if ($(this).scrollTop() < 50) {
        initialNavigation();
    }
});





// function setNavActive(a) {
//     // var target = $(event.target);
//     $(a).addClass('active');
// }
   