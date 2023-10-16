"use strict";

const container = document.querySelector(".container");
const previousResult = document.querySelector(".previousResult");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const dotButton = document.querySelector(".dot");
const deleteButton = document.querySelector(".delete");
const signButton = document.querySelector(".sign");

class Calculator {
  firstOperand = 0;
  secondOperand = 0;

  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
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

  clearDisplay() {
    result.textContent = 0;
    previousResult.textContent = 0;
  }

  clearCalculator() {
    result.textContent = 0;
    previousResult.textContent = 0;
    this.firstOperand = 0;
    this.secondOperand = 0;
  }

  btnPress(btn) {
    if (!btn) return;

    if (result.textContent == "0" && btn.classList.contains("number")) {
      result.textContent = btn.textContent;
      previousResult.textContent = btn.textContent;
    } else if (!result.textContent == "0" && btn.classList.contains("number")) {
      result.textContent += btn.textContent;
      previousResult.textContent += btn.textContent;
    }
  }

  operatorButtonPress(op) {
    if (!op) return;
  }

  deleteButtonPress() {}

  dotButtonPress() {}

  equalsButtonPress() {}
}

const calc = new Calculator();

container.addEventListener("click", (e) => {
  calc.btnPress(e.target.closest("button"));
  calc.operatorButtonPress(e.target.closest(".ops"));
});

clearButton.addEventListener("click", calc.clearCalculator);
