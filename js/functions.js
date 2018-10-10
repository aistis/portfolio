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
