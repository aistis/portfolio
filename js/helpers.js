"use strict";
var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sheet");
    var dots = document.getElementsByClassName("crumb");
    
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

function sliceText(string, length) {
    var indices = [];
    for (var i = 0; i <= length; i++) {
        if (string[i] === ' ')
            indices.push(i);
    }   
    return ( string.slice(0, indices[indices.length - 1]) + '... ');
}