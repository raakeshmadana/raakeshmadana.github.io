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

function setClass(cls) {
  document.getElementById('body').classList.add(cls);
  document.getElementById('container').classList.add(cls);
  document.getElementById('subhead').classList.add(cls);
}

function setColorScheme() {
  var date = new Date();
  var hours = date.getHours();
  if (hours > 8 && hours < 18) {
    setClass('light');
  } else {
    setClass('dark');
  }
}

window.addEventListener('load', function() {
  document.getElementById('switch').addEventListener('click', switchColor);
  setColorScheme();
});
