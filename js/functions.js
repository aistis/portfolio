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
        var i = '<i class="'+(o[p]).icon+'"></i>',
            a = '<a href="'+(o[p]).link+'">'+i+'</a>'
            if (o.hasOwnProperty(p))
            $('#about .social-icons').append(a);
    }
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
