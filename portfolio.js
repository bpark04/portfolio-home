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



filterSelection('all');

function filterSelection(id) {
  var x, i;

  x = document.getElementsByClassName('listItem');
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'active');
  }
  addClass(document.getElementById(id), 'active');

  x = document.getElementsByClassName('filterItem');
  if(id == 'all') id = '';
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'show');
    if(x[i].className.indexOf(id) > -1)
      addClass(x[i], 'show');
  }
}

function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
    }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");

 while(arr.indexOf(name) > -1){
   arr.splice(arr.indexOf(name), 1);
 }
 /* 배열의 원소들을 연결하여 하나의 값으로 만듭니다. */
 element.className = arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('python').addEventListener('click', filterSelection.bind(null, 'python'));
document.getElementById('js').addEventListener('click', filterSelection.bind(null, 'js'));
document.getElementById('db').addEventListener('click', filterSelection.bind(null, 'db'));

function viewPortfolio(event) {
  var polyNode = event.target;

  if(polyNode.tagName.toLowerCase() == 'i') { polyNode = polyNode.parentNode; }

  var overlayNode = polyNode;
  var imageNode = overlayNode.nextElementSibling;

  var itemNode = overlayNode.parentNode;
  var mainNode = itemNode.nextElementSibling;
  var subNode = mainNode.nextElementSibling;
  var textNode = subNode.nextElementSibling;

  document.getElementById('modalImage').src = imageNode.src;
  document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
  document.getElementById('modalSub').innerHTML = subNode.innerHTML;
  document.getElementById('modalText').innerHTML = textNode.innerHTML;

  document.getElementById('portfolioModal').style.display = 'block';
}

document.getElementById('modalClose').addEventListener('click', function(){
  document.getElementById('portfolioModal').style.display = 'none';
});

var filterItems = document.getElementsByClassName('overlay');

for(var i=0;i<filterItems.length;i++){
  filterItems[i].addEventListener('click', viewPortfolio);
}



/* ANCHOR */
function moveTo(id) {
  if(id == 'brand'){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }
  document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null,'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null,'about'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null,'service'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null,'portfolio'));
