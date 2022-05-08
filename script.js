let inputDisplay = document.querySelector('#inputDisplay');
let outputDisplay = document.querySelector('#outputDisplay');
let btn = document.querySelectorAll('.button');
console.log(inputDisplay.innerHTML);
let oldIsOperatorButton = false;
let oldIsEqualButton = false;

for (let i = 0; i < btn.length; i++) {
  const element = btn[i];
  element.addEventListener('click', function (e) {
    if (oldIsEqualButton) {
      inputDisplay.innerText = '';
      outputDisplay.innerText = '';
    }
    switch (e.target.innerHTML) {
      case 'del':
        oldIsOperatorButton = false;
        inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
        break;
      case '=':
        oldIsOperatorButton = false;
        oldIsEqualButton = true;
        outputDisplay.innerText = eval(inputDisplay.innerText);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (oldIsOperatorButton) break;
        oldIsOperatorButton = true;
        inputDisplay.innerHTML += e.target.innerHTML;
        break;
      default:
        oldIsOperatorButton = false;
        oldIsEqualButton = false;
        inputDisplay.innerHTML += e.target.innerHTML;
        break;
    }
  });
}
