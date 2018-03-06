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

function setClass(element, cls) {
  element.classList.add(cls);
}

function setColorScheme() {
  var date = new Date();
  var hours = date.getHours();
  if (hours > 8 && hours < 18) {
    setClass(document.getElementById('body'), 'light');
    setClass(document.getElementById('container'), 'light');
    setClass(document.getElementById('subhead'), 'light');
  } else {
    setClass(document.getElementById('body'), 'dark');
    setClass(document.getElementById('container'), 'dark');
    setClass(document.getElementById('subhead'), 'dark');
  }
}

window.addEventListener('load', function() {
  document.getElementById('switch').addEventListener('click', switchColor);
  setColorScheme();
});
