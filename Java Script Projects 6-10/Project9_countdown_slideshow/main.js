function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000)
    if (seconds == -1) {
        alert("Time's up!")
    }
        }
    tick();
}
let header = document.querySelector('header');
let images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image 4.jpg', 'image5.jpg', 'image6.jpg' ];
let headTimer = setInterval('SwapImages()', 1500);
let counter = 0;
function SwapImages() {
    counter++;
    if(counter > 3) {
        counter = 0;
    }
    header.setAttribute('style', 'background: url(assets/images/' + 
        images[counter] + '); background-size: cover; background-position: 100%;');
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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