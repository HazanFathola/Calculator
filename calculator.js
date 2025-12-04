let numberOne = "";
let numberTwo = "";
let currentOperator = "";
let result = "";

function clickNumbers(value) {
  if (currentOperator === "") {
    numberOne += value;
    console.log(numberOne);
  } else if (
    numberOne != "" &&
    (currentOperator === "+" ||
      currentOperator === "-" ||
      currentOperator === "*" ||
      currentOperator === "/")
  ) {
    numberTwo += value;
  }
  console.log(numberTwo);
  showDisplay();
}
function clickOperator(value) {
  if (currentOperator === "" && numberOne !== "" && numberOne != "-") {
    currentOperator = value;
    console.log(currentOperator);
  } else if (currentOperator != "" && numberTwo === "") {
    currentOperator = value;
  } else if (numberTwo != "") {
    calculation();
  } else if (currentOperator === "" && numberOne === "") {
    if (value === "-") {
      numberOne = value;
    }
  } else if (numberOne === "-") {
    if (value === "*" || value === "+" || value === "/") {
      numberOne = "";
    }
  }

  showDisplay();
}
function calculation() {
  let ersteZahl = Number(numberOne);
  let zweiteZahl = Number(numberTwo);
  if (currentOperator === "-") {
    ersteZahl = ersteZahl - zweiteZahl;
    result = String(ersteZahl);
    saveHistory();
    numberOne = String(ersteZahl);
    numberTwo = "";
  } else if (currentOperator === "+") {
    ersteZahl = ersteZahl + zweiteZahl;
    result = String(ersteZahl);
    saveHistory();
    numberOne = String(ersteZahl);
    numberTwo = "";
  } else if (currentOperator === "*") {
    ersteZahl = ersteZahl * zweiteZahl;
    result = String(ersteZahl);
    saveHistory();
    numberOne = String(ersteZahl);
    numberTwo = "";
  } else if (currentOperator === "/") {
    ersteZahl = ersteZahl / zweiteZahl;
    result = String(ersteZahl);
    saveHistory();
    numberOne = String(ersteZahl);
    numberTwo = "";
  }
}
function showDisplay() {
  let calculation = document.getElementById("firstshow");
  let firstnumber = document.getElementById("firstnumber");
  if (numberOne != "" && currentOperator === "" && numberTwo === "") {
    firstnumber.innerHTML = numberOne;
  } else if (numberOne != "" && currentOperator != "" && numberTwo === "") {
    firstnumber.innerHTML = numberOne;
    calculation.innerHTML = numberOne + currentOperator;
  } else {
    firstnumber.innerHTML = numberTwo;
    calculation.innerHTML = numberOne + currentOperator + numberTwo;
  }
}
function saveHistory() {
  let save = document.getElementById("historylist");

  if (currentOperator != "" && numberOne != "" && numberTwo != "") {
    save.innerHTML +=
      numberOne + currentOperator + numberTwo + "=" + result + "<br>" + "<br>";
  }
}
function deleteAll() {
  let deletehistory = document.getElementById("historylist");
  let deletecalculation = document.getElementById("firstshow");
  let deletefirstnumber = document.getElementById("firstnumber");
  numberOne === "";
  numberTwo === "";
  currentOperator === "";
  deletehistory.innerHTML = "";
  deletecalculation.innerHTML = "";
  deletefirstnumber.innerHTML = "";
}
