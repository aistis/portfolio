"use strict"
$(document).ready(function (){
    buildMenu(menuItems);
    buildSkills(skills);
    buildIcons(icons);
    buildServices(services);
    buildEducation(education);
    buildWork(work);
    buildFilter(projects);
    buildProjects(projects);
    countSheets(testimonials);
    buildSlides(testimonials);
    showSlides();
    buildBlog(blogPosts, 150);

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
    });
    $('#display-portfolio .box').mouseleave(
        function () { 
            $(this).removeClass(`hot`)
            $(this).addClass(`cold`)
            $(this).children('img').removeClass(`dim-30`)
    });    
    $(`#portfolio-filter > div > ul > li`).click(function (e) { 
        e.preventDefault();
        var tag = ($(this).attr(`data-tag`))
        filterProjects(tag, projects)
    });
    
    $(window).resize(resizeTestimonials);

    
//     $('.swiper').slick({
//         // setting-name: setting-value
//       });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        solidNavigation();
    }
    if ($(this).scrollTop() < 50) {
        initialNavigation();
    }

});
