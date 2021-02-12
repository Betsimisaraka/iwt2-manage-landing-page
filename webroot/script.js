let slideIndex = 1;

function currentSlides(index) {
  showSlides(slideIndex = index)
}

var slides = document.getElementsByClassName("slides");
var buttons = Array.from(document.querySelectorAll(".testimonials"));
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

function showSlides(n) {
    var i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    buttons[slideIndex-1].className += " active";
  }

  showSlides(slideIndex);

buttons.forEach(button => {
  button.addEventListener('onclick', (index) => currentSlides(index))
})

let index = 1

function plusSlides(n) {
  imageSlides(index += n);
}

function imageSlides(n) {
  var i;
  if (n > slides.length) {index = 1} 

  if (n < 1) {index = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
  slides[index+1].style.display = "block";
  slides[index-1].style.display = "block";
}

imageSlides(index);

prevBtn.addEventListener('click', () => plusSlides(-1));
nextBtn.addEventListener('click', () => plusSlides(+1));