var scrVal = document.getElementById("screen");
var resultscr = document.getElementById("result");
var first_number = 0;
var second_number = 0;
var operator = "";
var OperatorIputedFlag = new Boolean(false);

const operatorArray = new Array("÷", "x", "-", "+");

function buttonclick(value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      numberbutton(value);
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      operatorbutton(value);
      break;
    case 14:
      dotbutton();
      //nothing ;
      break;
    case 15:
      break;
    case 16:
      delbutton();
      break;
    case 17:
      equalbutton();
      break;
    default:
      alert("not available value");
      break;
  }

  //   console.log(first_number);
  //   console.log(second_number);
  //   console.log(operator);
}

function numberbutton(value) {
  scrVal.innerText += value;
  console.log("ok");
}

function operatorbutton(value) {
  if (OperatorIputedFlag == false) {
    OperatorIputedFlag = true;
    console.log("ok");
    scrVal.innerText += operatorArray[value - 10];
    operator = operatorArray[value - 10];
  } else {
    first_number = parseFloat(
      scrVal.innerText.slice(0, scrVal.innerText.indexOf(operator))
    );
    second_number = parseFloat(
      scrVal.innerText.slice(scrVal.innerText.indexOf(operator) + 1)
    );
    resultscr.innerText = caculator(first_number, second_number, operator);
    scrVal.innerText = resultscr.innerText + operatorArray[value - 10];
    operator = operatorArray[value - 10];
  }
}

function delbutton() {
  scrVal.innerText = "";
  operator = "";
  first_number = 0;
  second_number = 0;
  OperatorIputedFlag = false;
}

function dotbutton() {
  let dotEnable = new Boolean(true);
  if (
    scrVal.innerText.includes(".", 0) == true &&
    OperatorIputedFlag == false
  ) {
    dotEnable = false;
  }
  if (
    OperatorIputedFlag == true &&
    scrVal.innerText.includes(".", scrVal.innerText.indexOf(operator)) == true
  ) {
    dotEnable = false;
  }

  if (dotEnable) scrVal.innerText += ".";
}

function equalbutton() {
  first_number = parseFloat(
    scrVal.innerText.slice(0, scrVal.innerText.indexOf(operator))
  );
  second_number = parseFloat(
    scrVal.innerText.slice(scrVal.innerText.indexOf(operator) + 1)
  );
  resultscr.innerText = caculator(first_number, second_number, operator);
  scrVal.innerText += "=";
}

function caculator(first, second, ope) {
  switch (ope) {
    case "÷":
      return first / second;
    case "x":
      return first * second;
    case "+":
      return first + second;
    case "-":
      return first - second;
  }
}
