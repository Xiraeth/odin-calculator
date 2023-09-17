"use strict";

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".calculator");
const result = document.querySelector(".result");

updateDisplay();

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
      return Number((num1 + num2).toFixed(2));
    case "-":
      return Number((num1 - num2).toFixed(2));
    case "x":
      return Number((num1 * num2).toFixed(2));
    case "/":
      if (num2 == 0) return "Error";
      else return Number((num1 / num2).toFixed(2));
  }
}

function updateDisplay() {
  let operator = "";
  let start = true;
  let nums = [0, 0];
  let active = 0;
  let canSwitch = false;
  let limit = 0;
  let canCalc = true;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    if (nums[0] == "Error") {
      operator = "";
      start = true;
      nums = [0, 0];
      active = 0;
      canSwitch = false;
      limit = 0;
      canCalc = true;
    }

    if (btn.classList.contains("number") && limit < 10) {
      if (start) {
        nums[active] = btn.textContent;
        result.textContent = nums[active];
        start = false;
      } else {
        nums[active] += btn.textContent;
        result.textContent = nums[active];
      }
      limit++;
      canSwitch = true;
      canCalc = true;
      nums[active] = +nums[active];
      console.log(nums);
    }

    if (btn.classList.contains("ops")) {
      if (active == 1 && canCalc) {
        nums[0] = result.textContent = operate(nums[0], operator, nums[1]);
      }
      operator = btn.textContent;
      start = true;
      limit = 0;
      if (canSwitch) active = 1;
      console.log(nums);
    }

    if (btn.classList.contains("equals")) {
      if (active == 1 && !start) {
        nums[0] = result.textContent = operate(nums[0], operator, nums[1]);
        start = true;
        canCalc = false;
        console.log(nums);
      }
    }

    if (btn.classList.contains(".dot")) {
    }

    if (btn.classList.contains("clear")) {
      console.clear();
      operator = "";
      limit = 0;
      active = 0;
      start = true;
      canSwitch = false;
      nums[0] = nums[1] = 0;
      result.textContent = 0;
    }
  });
}

function swap(active) {
  return active == 1 ? 0 : 1;
}