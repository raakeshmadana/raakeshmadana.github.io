function toggleClass(element) {
  element.classList.toggle('dark');
  element.classList.toggle('light');
}

function switchColor() {
  toggleClass(document.getElementById('body'));
  toggleClass(document.getElementById('container'));
  if (this.innerText == 'dark') {
    this.innerText = 'light';
  } else {
    this.innerText = 'dark';
  }
}

function setClass(cls) {
  document.getElementById('body').classList.add(cls);
  document.getElementById('container').classList.add(cls);
}

function setColorScheme() {
  var date = new Date();
  var hours = date.getHours();
  if (hours > 8 && hours < 20) {
    setClass('light');
    document.getElementById('switch').innerText = 'dark';
  } else {
    setClass('dark');
    document.getElementById('switch').innerText = 'light';
  }
}

window.addEventListener('load', function() {
  document.getElementById('switch').addEventListener('click', switchColor);
  setColorScheme();
});
