"use strict"
$(document).ready(function (){
    buildMenu(menuItems);
    buildSkills(skills);
    buildIcons(icons);
    $('a').click(function() {
        console.log('BUM!')
        $('#navbarSupportedContent > ul > li > a').removeClass('active');
        // pasirasyti if'a kuris patikrintu ar as nespaudziu and logotipo ir jei spaudziu, akd uzsetintu pradiniam linkui ACTIVE

        $(this).addClass('active')
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        solidNavigation();
    }
    if ($(this).scrollTop() < 50) {
        initialNavigation();
    }
});
