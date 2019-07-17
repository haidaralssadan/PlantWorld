
var imgCaptions= ["Shelves with young plants", "Out door grown IVY plant", "Indoor IVY jungle"]; // Array of valuea for image imgCaptions
var slideIndex = 1; 

//  Variables for slide show elements
var numText = document.getElementsByClassName('numbertext')[0];
var slides = document.getElementsByClassName("mySlides")[0];
var myslidesImg = document.querySelector('.mySlides img');
var imgCaption = document.getElementsByClassName("imgCaption")[0];
var dots = document.getElementsByClassName("dot");
var slideslength = 3; // Total number of images displayed

showSlides(slideIndex);  

function plusSlides(n) {
  showSlides(slideIndex += n);}

function currentSlide(n) {
  showSlides(slideIndex = n);}

function showSlides(n) { //  Main function
  var i;
  if (n > slideslength) {slideIndex = 1}   //  to control the slideshow loop
  if (n < 1) {slideIndex = slideslength}
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  myslidesImg.src="./images/s_" + slideIndex + ".jpg"
  numText.textContent = slideIndex + " / 3";
  imgCaption.textContent = imgCaptions[slideIndex-1];
  dots[slideIndex-1].className += " active";
}
