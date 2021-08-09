function imageJustSize() {
  var title = document.getElementById('title');
  var winH = window.innerHeight;
  title.style.height = winH + 'px';
}

imageJustSize();

window.addEventListener('resize', imageJustSize);
