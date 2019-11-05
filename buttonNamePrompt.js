const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your full name?');
  alert('Hi ' + name + ', nice to see you!');
}