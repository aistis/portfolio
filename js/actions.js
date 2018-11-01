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
    // countSheets(testimonials);
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
    
    $(`#chart-update`).click(function (e) { 
        e.preventDefault();
        updateChartData();
        buildChart();
        clearForm();        
    });

    $(`#earnings`).keypress(function (e) { 
        if (e.key === 'Enter') {
            console.log('Paspaustas klavisas: "'+ e.key + '" - Vyksta reikalai');
            updateChartData();
            buildChart();
            clearForm();  
        }
    });
    $("nav li").click(function (){
        let link = $(this)[0].firstChild.attributes.href.nodeValue,
            position = $(this)[0].firstChild.hash;
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 2000);

        // console.log($(this)[0].firstChild.hash)
        // console.log($(position).offset())
    });

    // buildMap()
});

$(window).scroll(function() {
    // let tags = [];
    console.log(`**************`)
    console.log('Current active elemet position: ' + $('nav li .active').offset().top)
    console.log('Active element hash: '+ $('nav li .active')[0].hash)
    console.log('Value tu copare with: '+ $($('nav li .active')[0].hash).offset().top)
    console.log(`**************`)
    
    if ($(this).scrollTop() > 50) {
        solidNavigation();
        // setMenuActive($(document).scrollTop());
    }
    if ($(this).scrollTop() < 50) {
        initialNavigation();
    }
    // console.log($(document).scrollTop())
    // setMenuActive()
});
