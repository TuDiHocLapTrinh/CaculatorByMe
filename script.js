var scrVal = document.getElementById("screen");
var resultscr = document.getElementById("result");
var first_number = 0;
var second_number = 0;
var operator = "";
var OperatorIputedFlag = new Boolean(false);
var WaitForClearScreenFlag = new Boolean(false);
var operatorArray = new Array("÷", "x", "-", "+");

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
      //   if (scrVal.innerText.length <= 4) {
      //     scrVal.innerText += value;
      //   } else {
      //     alert("Your number too long");
      //   }
      if (OperatorIputedFlag == true) {
        second_number = value;
      } else {
        first_number = value;
      }
      scrVal.innerText += value;

      console.log("ok");
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      //scrVal.innerText += operatorArray[value - 10];
      if (OperatorIputedFlag == false) {
        OperatorIputedFlag = true;
        console.log("ok");
        scrVal.innerText += operatorArray[value - 10];
        operator = operatorArray[value - 10];
      } else {
        OperatorIputedFlag = true;
        resultscr.innerHTML = caculator(first_number, second_number, operator);
        first_number = parseFloat(resultscr.innerHTML);
        scrVal.innerHTML = resultscr.innerHTML + operatorArray[value - 10];
        operator = operatorArray[value - 10];
      }
      break;
    case 14:
      if (scrVal.innerText.includes(".") == false) {
        scrVal.innerText += ".";
      }

      //nothing ;
      else break;
    case 15:
    case 16:
    case 17:
      break;
    default:
      alert("not available value");
      break;
  }

  console.log(first_number);
  console.log(second_number);
  console.log(operator);
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
