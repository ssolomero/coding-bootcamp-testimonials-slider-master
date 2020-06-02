var slideIndex = 1;
var index = 0;
showSlides(slideIndex);



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

// Next/previous controls
console.log(document.getElementsByClassName("next-btn"));

document.getElementById("prev-btn").onclick = function() {
  showSlides(slideIndex -= 1);
};

document.getElementById("next-btn").onclick = function() {
  showSlides(slideIndex += 1);
};
