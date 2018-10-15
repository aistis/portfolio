"use strict"
$(document).ready(function (){
    buildMenu(menuItems);
    buildSkills(skills);
    buildIcons(icons);
    buildServices(services);
    buildEducation(education);
    buildWork(work);
    buildProjects();
    $('a').click(function() {
        $('#navbarSupportedContent > ul > li > a').removeClass('active');
        // pasirasyti if'a kuris patikrintu ar as nespaudziu and logotipo ir jei spaudziu, akd uzsetintu pradiniam linkui ACTIVE   
        $(this).addClass('active')
    });
    $('#display-portfolio .box').hover(
        function () {
            $(this).removeClass(`cold`)
            $(this).addClass(`hot`)
            $(this).children('div').toggleClass(`dim-hidden dim-visible`)
            $(this).children('img').addClass(`dim-30`)
        }
    );
    $('#display-portfolio .box').mouseleave(
        function () { 
            $(this).removeClass(`hot`)
            $(this).addClass(`cold`)
            $(this).children('img').removeClass(`dim-30`)
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        solidNavigation();
    }
    if ($(this).scrollTop() < 50) {
        initialNavigation();
    }
    // $('#display-portfolio>.box').hover(
        
    //         $('#display-portfolio>.box>.dim').toggleClass(`dim-hidden`, `dim-visible`)
        
    //     // function () {
    //     //     $('#display-portfolio>.box>.dim').css(`visibility`, `hidden`);
    //     // }
    // );
});
