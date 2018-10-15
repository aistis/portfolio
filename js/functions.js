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
    }
}

function buildServices(o) {
    for (var p in o) {
        var a = '<h3>'+(o[p]).title+'</h3>',
            n = '<p>'+(o[p]).info+'</p>',
            i = '<div class="col-xs-12 col-lg-4"><div class="box"><div class="icon-area"><i class="'+(o[p]).icon+'"></i></div>'+a+n+'</div></div>'
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
        $('#portfolio-filter>div>ul').append('<li>'+i+'</li>')
    });
    console.log(tags)
    return
}

function filterProjects(t, projects) {
    for (var i in projects) {
        if ( (projects[i]).tag === t ) {
            // console.log('Tag inside ittertation: '+(projects[i]).tag)
            // console.log('Tag we\'re looking for: '+t)
            console.log('Data to store: '+(projects[i]).img)
            console.log('Data to store: '+(projects[i]).tag)
        }
        if ( t === "all" ) {
            var html = '<div class="col-md-4 col-12"><div class="box"><div class="dim-hidden"><h4>'+(projects[i]).tag+' work</h4><div class="tag">'+(projects[i]).tag+'</div></div><img src="'+(projects[i]).img+'" alt="'+(projects[i]).tag+'"></div></div>'
            $('#display-portfolio').append(html);
            console.log(html)

            // console.log('Data to store: '+(projects[i]).img)
            // console.log('Data to store: '+(projects[i]).tag)
        }

        // '<div class="box"><div class="dim-hidden"><h4>'+projects[i]).tag+' work</h4><div class="tag">'+projects[i]).tag+'</div></div><img src="'+projects[i]).img+'" alt="'+projects[i]).tag+'"></div>'
}}

function buildProjects() {
    filterProjects("all", projects)
}


// ******************************************
// *************CHEAT LIST*******************
// ******************************************


// // BUILD AN ITEM FROM SELECTED OBJECT
// function funkcionName(objectName) {
//     for (var key in objectName) {      
//         if (objectName.hasOwnProperty(key)) 
//         $('nav > ul').append('<li class="nav-item"><a class="nav-link" href="'+ (objectName[key]).elementName + '">'+(objectName[key]).elementName+'</a></li>');
//     }   *************Use append to add piece of HTML one after another. .html used for replacing an element ******************
// }
