// JS Nuggets
// Get current URL with JavaScript

// http://carnes.cc/example/index.html
window.location.protocol; // "http:"
window.location.host; // "carnes.cc"
window.location.pathname; // "example/index.html"
window.location.href; // "http://carnes.cc/example/index.html"

// Long way to get full URL
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

// To break up a URL like: http://carnes.cc/JSNuggets/is/awesome/index.html
var pathArray = window.location.pathname.split( '/' );

// Access different parts
var secondLevelLocation = pathArray[0];



// How to get URL components using jQuery

var x = $(location).attr('<property>');

// Example URL http://www.carnes.cc:8082/index.php#tab2?foo=123
/*
Property    Result
------------------------------------------
host        www.carnes.cc:8082
hostname    www.carnes.cc
port        8082
protocol    http:
pathname    index.php
href        http://www.carnes.cc:8082/index.php#tab2
hash        #tab2
search      ?foo=123
*/
