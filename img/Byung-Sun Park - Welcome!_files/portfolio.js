
/* HEADER */

window.onload = function() {scrollTop()};
window.onscroll = function() {scrollTop()};

function scrollTop() {
    var headerTag = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!headerTag.classList.contains('nav-fixed')) {
            headerTag.classList.add('nav-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            headerTag.style.display = 'none';
            setTimeout(function(){
                headerTag.style.display = 'block';
            }, 40);
        }
    } else {
        if(headerTag.classList.contains('nav-fixed')) {
            headerTag.classList.remove('nav-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);



/* WELCOME AREA */

var imgIndex = 1;
showImg(imgIndex);

function nextImgTimer() {
  showNext(1);
}

var imageTimer = setInterval(nextImgTimer, 3000);


function showNext(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(nextImgTimer, 3000);

  showImg(imgIndex += n);
}

function showCurrent(n){
  clearInterval(imageTimer);
  imageTimer = setInterval(nextImgTimer, 3000);

  showImg(imgIndex = n);
}

function showImg(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {imgIndex = 1}
  if (n < 1) {imgIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[imgIndex-1].style.display = 'block';
  dots[imgIndex-1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', showNext.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', showNext.bind(null,1));

document.getElementById('firstDot').addEventListener('click', showCurrent.bind(null,1));
document.getElementById('secondDot').addEventListener('click', showCurrent.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', showCurrent.bind(null,3));
document.getElementById('forthDot').addEventListener('click', showCurrent.bind(null,4));
