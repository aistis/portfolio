"use strict";

function buildMenu(items) {
    for (var key in items) {      
        if (items.hasOwnProperty(key)) 
        $('nav ul').append('<li class="nav-item"><a class="nav-link" href="'+ (items[key]).href + '">'+(items[key]).title+'</a></li>');
    }
    $('#navbarSupportedContent > ul > li:nth-child(1) > a').addClass('active')
}

function solidNavigation() {
    $('header').addClass('scroll');
}
function initialNavigation() {
    $('header').removeClass('scroll');
}

function buildSkills(items) {
    items.forEach(i => {
        $('#home .skills').append('<div class="skill">'+i+'</div>');
    });
}

function buildIcons(o) {
    for (var p in o) {
        var i = '<i class="tr-ff '+(o[p]).icon+'"></i>',
            a = '<a href="'+(o[p]).link+'">'+i+'</a>'
        if (o.hasOwnProperty(p))
        $('#about .social-icons').append(a);
        $('footer .social-icons').append(a);
    }
}

function buildServices(o) {
    for (var p in o) {
        var a = '<h3>'+(o[p]).title+'</h3>',
            n = '<p>'+(o[p]).info+'</p>',
            i = '<div class="col-xs-12 col-lg-4">\
                    <div class="box">\
                        <div class="icon-area">\
                            <i class="'+(o[p]).icon+'"></i>\
                        </div>\
                        '+a+n+'\
                    </div>\
                </div>'
            if (o.hasOwnProperty(p))
        $('#display-services').append(i);
    }
}

// // pasirasyti funkcija, kuri random sugeneruotu datas

function buildEducation(e) {
    for (var p in e) {
        var a = '<h5>'+(e[p]).title+'</h5>',
            i = '<p>'+(e[p]).period+'</p>',
            n = '<p>'+(e[p]).info+'</p>',
            block = '<div class="iteration">'+a+i+n+'</div>'
        if (e.hasOwnProperty(p))
        $('#education').append(block);
    }
}

function buildWork(w) {    
    for (var p in w) {
        var c = '<h5>'+(w[p]).company+'</h5>',
            i = '<p>'+(w[p]).period+'</p>',
            n = '<p>'+(w[p]).info+'</p>',
            block = '<div class="iteration">'+c+i+n+'</div>'
        if (w.hasOwnProperty(p))
        $('#work').append(block);
    }
}

function buildFilter(projects) {
    var tags = ['all'];
    for (var i in projects) {
        var t = ((projects[i]).tag);
        if (projects.hasOwnProperty(i) && tags.indexOf(t) < 0)
        tags.push(t)
    }
    tags.forEach(i => {
        $('#portfolio-filter>div>ul').append('<li class="pointer" data-tag='+i+'>'+i+'</li>')
    });
}

function filterProjects(t, projects) {
    for (var i in projects) {
        if ( t === "" ) {
            return 
        }
        if ( (projects[i]).tag === t ) {
            $(`#display-portfolio > div`).hide();
            $(`#display-portfolio > div[data-tag="`+t+`"]`).show();
        }
        if ( t === "all" ) {
            $(`#display-portfolio > div`).show();
        }
    }
}

function buildProjects(projects) {
    for (var i in projects) {
        if (projects.hasOwnProperty(i)) {
            var html = '<div class="col-lg-4 col-md-6 col-12" data-tag='+(projects[i]).tag+'><div class="box"><div class="dim-hidden"><h4>'+(projects[i]).tag+' work</h4><div class="tag">'+(projects[i]).tag+'</div></div><img src="'+(projects[i]).img+'" alt="'+(projects[i]).tag+'"></div></div>'
            $('#display-portfolio').append(html);
        }
    }
}


// 
// ************* TESTIMONIALS BUILD *************
// 

function buildSlides (t) {
 // Build slides
    for (var i in t) {
        var quote = ((t[i]).quote),
            img = ((t[i]).img),
            name = ((t[i]).name),
            title = ((t[i]).title);

        $('.swiper').append('<div class="sheet col-12" data-sheet="'+i+'">\
                                <div class="testimonial">\
                                    <div class="img"></div>\
                                    <p>'+quote+'</p>\
                                    <p>- '+name+'</p>\
                                    <p>'+title+'</p>\
                                </div>\
                            </div>')

        $('#testimonials > div > div > div.sheet[data-sheet='+i+'] > div > div').css('background-image', 'url(' + img + ')')
        $('.position').append('<div class="crumb pointer"></div>')
        $('.swiper > .sheet').css('display','none')
    }
}

function buildBlog (t, charNum) {
    for (var i in t) {
        var c = ((t[i]).teaser),
            img = ((t[i]).img),
            time = ((t[i]).timestamp),
            title = ((t[i]).title);
            
            if (c.length > charNum) {
                c = sliceText(c,charNum)
            }
            
            $('#blog .row:first-child').append('<div class="col-12 col-md-6 col-lg-4 ">\
                                        <div class="box">\
                                            <div class="blog-img">\
                                                <img src="'+img+'" alt="">\
                                            </div>\
                                            <div class="blog-content">\
                                                <h5>'+title+'</h5>\
                                                <p class="timestamp">'+time+'</p>\
                                                <p class="blog-teaser">'+c+'</p>\
                                                <a class="button" href="">click</a>\
                                            </div>\
                                        </div>\
                                    </div>')
        }
}
// let linkMap = {};
//     function buildMap() { 
//         let     links = $('nav li a'),
//         href = [],
//         position = [];
//         for (let i = 0; i < links.length; i++) {
//             const element = links[i];
//             href.push($(links[i]).attr('href'));
//         }
//         for (let i = 0; i < links.length; i++) {
//             const element = $(links[i]).attr('href');
//             position.push($(element).offset().top);
//         }
//         linkMap.href = href;
//         linkMap.position = position;
//         // console.log(linkMap.position)
//     };
    
//     function setMenuActive(current) {
//         // toggle class for menu
//         if (linkMap.position.indexOf(current) > 0) {
//             console.log('BAMMM!!!'+linkMap.position.indexOf(current))
//         }
//     };
    function setMenuActive() {
        console.log(`**************`)
        console.log('Current active elemet position: ' + $('nav li .active').offset().top)
        console.log('Active element hash: '+ $('nav li .active')[0].hash)
        console.log('Value tu compare with: '+ $($('nav li .active')[0].hash).offset().top)
        console.log(`**************`)
        
    }

// ******************************************
// *************CHEAT LIST*******************
// ******************************************
