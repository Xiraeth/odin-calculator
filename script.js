"use strict";

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".calculator");
const result = document.querySelector(".result");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

function updateDisplay() {
  container.addEventListener("click", (e) => {
    let temp = 0;
    let value = 0;
    let value2 = 0;
    let operator = "";
    const btn = e.target.closest(".btn");
    if (!btn) return;
    else if (btn.classList.contains("number")) {
      value = result.textContent = Number(btn.textContent);
    } else if (btn.classList.contains("clear")) {
      value = result.textContent = 0;
      operator = "";
    } else if (btn.classList.contains("ops")) {
      operator = btn.textContent;
    }
  });
}

updateDisplay();
