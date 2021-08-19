var slideIndex_shop = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides_shop(slideIndex_shop);

  // Auto Move Slide
  var sec = 3000;
  setInterval(function(){
    slideIndex_shop++;
    showSlides_shop(slideIndex_shop);

  }, sec);
}


// Next/previous controls
function moveSlides_shop(n) {
  slideIndex_shop = slideIndex_shop + n
  showSlides_shop(slideIndex_shop);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex_shop = n;
  showSlides_shop(slideIndex_shop);
}

function showSlides_shop(n) {

  var slides_shop = document.getElementsByClassName("mySlides__shop-focus");
  var dots = document.getElementsByClassName("dot");
  var size = slides_shop.length;

  if ((n+1) > size) {
    slideIndex_shop = 0; n = 0;
  }else if (n < 0) {
    slideIndex_shop = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides_shop.length; i++) {
      slides_shop[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides_shop[n].style.display = "block";
  dots[n].className += " active";
}

// nav fix
function navigo_shop (){
  const header = document.querySelector('header');
  const headerheight = header.clientHeight;
  document.addEventListener('scroll', onScroll, { passive: true });

function onScroll_shop () {
  const scrollposition = pageYOffset;
  const nav = document.querySelector('nav');
   if (headerheight<=scrollposition){
     nav.classList.add('fix')
   }
   else {
     nav.classList.remove('fix');
   }
 } 
  
}