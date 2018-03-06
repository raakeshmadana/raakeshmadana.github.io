function toggleClass(element) {
  element.classList.toggle('dark');
  element.classList.toggle('light');
}

function switchColor() {
  toggleClass(document.getElementById('body'));
  toggleClass(document.getElementById('container'));
  toggleClass(document.getElementById('subhead'));
  if (this.innerText == 'dark') {
    this.innerText = 'light';
  } else {
    this.innerText = 'dark';
  }
}

window.addEventListener('load', function() {
  document.getElementById('switch').addEventListener('click', switchColor);
});
