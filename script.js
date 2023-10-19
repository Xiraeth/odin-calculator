"use strict";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".ops");
const result = document.querySelector(".result");
const operand = document.querySelector(".operand");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const swapSign = document.querySelector(".sign");
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
    if (!operator) {
      result.textContent = this.result;
      operand.textContent = this.operand;
      return;
    }
    result.textContent = this.result + " " + operator;
    operand.textContent = this.operand;
  }

  clear = () => {
    this.result = "0";
    this.operand = "0";
    operator = undefined;
    console.clear();
    this.updateDisplay();
  };

  numberPress(btn) {
    if (operator === null) return;
    if (this.operand.includes(".") && btn.textContent == ".") return;
    if (this.operand == "0") this.operand = btn.textContent;
    else this.operand += btn.textContent;
  }

  operatorButtonPress(op) {
    if (this.operand == "") {
      operator = op.textContent;
      return;
    }
    if (this.result == 0) {
      this.result = this.operand;
      operator = op.textContent;
      this.operand = "";
      return;
    }

    this.result = this.operate(
      Number(this.result),
      operator,
      Number(this.operand)
    );
    this.operand = "";
    operator = op.textContent;
  }

  delete() {
    this.operand = this.operand.slice(0, -1);
  }

  equals() {
    if (this.operand == "" || operator == undefined) return;
    this.result = this.operate(
      Number(this.result),
      operator,
      Number(this.operand)
    );
    operator = null;
    this.operand = "";
  }

  swapSign() {
    if (this.operand == "") return;

    this.operand = -1 * Number(this.operand);
  }
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
    calc.updateDisplay(e.target);
  });
});

equalsButton.addEventListener("click", (e) => {
  calc.equals();
  calc.updateDisplay();
});

deleteButton.addEventListener("click", (e) => {
  calc.delete();
  calc.updateDisplay();
});

swapSign.addEventListener("click", () => {
  calc.swapSign();
  calc.updateDisplay();
});

clearButton.addEventListener("click", calc.clear);
