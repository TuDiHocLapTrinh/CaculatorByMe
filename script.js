let inputDisplay = document.querySelector('#inputDisplay');
let outputDisplay = document.querySelector('#outputDisplay');
let btn = document.querySelectorAll('.button');
console.log(inputDisplay.innerHTML);
let oldDefaulfButton = '';

for (let i = 0; i < btn.length; i++) {
  const element = btn[i];
  element.addEventListener('click', function (e) {
    switch (e.target.innerHTML) {
      case 'del':
        inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
        break;
      case '=':
        outputDisplay.innerText = eval(inputDisplay.innerText);
        break;
      default:
        inputDisplay.innerHTML += e.target.innerHTML;
        oldDefaulfButton = e.target.innerHTML;
        break;
    }
  });
}
