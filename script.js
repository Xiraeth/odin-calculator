"use strict";

const container = document.querySelector(".container");
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
    if (!btn) return;

    if (this.operand.includes(".") && btn.textContent == ".") return;
    if (this.operand == "0") this.operand = btn.textContent;
    else this.operand += btn.textContent;
  }

  operatorButtonPress() {}

  delete() {}

  equals() {}
}

const calc = new Calculator(operand.textContent, operator, result.textContent);

container.addEventListener("click", (e) => {
  calc.numberPress(e.target.closest(".number"));
  calc.updateDisplay();
});

clearButton.addEventListener("click", calc.clear);
