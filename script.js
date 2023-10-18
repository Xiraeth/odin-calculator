"use strict";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".ops");
const result = document.querySelector(".result");
const operand = document.querySelector(".operand");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
let operator;

class Calculator {
  constructor(operand, operator, result) {
    this.operand = operand;
    this.operator = operator;
    this.result = result;
    this.clear();
  }

  operate(a, op, b) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return a / b;
    }
  }

  updateDisplay() {
    result.textContent = this.result;
    operand.textContent = this.operand;
  }

  clear = () => {
    this.result = "0";
    this.operand = "0";
    console.clear();
    this.updateDisplay();
  };

  numberPress(btn) {
    if (this.operand.includes(".") && btn.textContent == ".") return;
    if (this.operand == "0") this.operand = btn.textContent;
    else this.operand += btn.textContent;
  }

  operatorButtonPress(op) {
    operator = op.textContent;
    if (this.operand == "") return;
    if (this.result == 0) {
      this.result = this.operand;
      this.operand = "";
      return;
    }
    this.operand = "";
  }

  delete() {}

  equals() {}
}

const calc = new Calculator(operand.textContent, operator, result.textContent);

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calc.numberPress(e.target);
    calc.updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calc.operatorButtonPress(e.target);
    calc.updateDisplay();
  });
});

clearButton.addEventListener("click", calc.clear);
