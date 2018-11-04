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
    buildSlides(testimonials);
    showSlides();
    buildBlog(blogPosts, 150);
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
    
    $(`#chart-update`).click(function (e) { 
        e.preventDefault();
        updateChartData();
        buildChart();
        clearForm();        
    });

    $(`#earnings`).keypress(function (e) { 
        if (e.key === 'Enter') {
            updateChartData();
            buildChart();
            clearForm();  
        }
    });
    $("nav li").click(function (){
        let link = $(this)[0].firstChild.attributes.href.nodeValue;
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 2000);
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
$(document).ready(function () {
    setMenuActive()
    $(window).scroll(function() {
        setMenuActive();    
    });
});
$(function() {
    console.log( "The DOM is now loaded and can be manipulated." );
    });
    

