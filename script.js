"use strict";

const container = document.querySelector(".container");
const result = document.querySelector("#result");
/*
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
    case "×":
      return Number((num1 * num2).toFixed(2));
    case "÷":
      if (num2 == 0) return "Error";
      else return Number((num1 / num2).toFixed(2));
  }
}

function updateDisplay() {
  let operator = "";

  // Checks whether we are already typing a number or just started
  let start = true;

  let nums = [0, 0];

  // Is the index for nums
  let active = 0;

  let canSwitch = false;

  // Sets a limit to how many digits a number can have
  let limit = 0;

  // Decides whether pressing an operation button is going to calculate the result (if one exists)
  let canCalc = true;

  // Decides whether we can swap signs
  let canSwap = false;

  // Checks whether we are writing on the decimal part
  let onDecimal = false;

  // Checks how many commas we have in our number (cant be more than one)
  let count = 0;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || btn.classList.contains("result")) return;

    if (nums[0] == "Error") {
      operator = "";
      start = true;
      nums = [0, 0];
      active = 0;
      onDecimal = false;
      count = 0;
      canSwitch = false;
      limit = 0;
      canCalc = true;
      canSwap = false;
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
      canSwap = true;
      canSwitch = true;
      canCalc = true;
      nums[active] = +nums[active];
    }

    if (btn.classList.contains("ops")) {
      if (active == 1 && canCalc) {
        nums[0] = result.textContent = operate(nums[0], operator, nums[1]);
      }
      count = 0;
      canSwap = false;
      operator = btn.textContent;
      start = true;
      limit = 0;
      onDecimal = false;
      if (canSwitch) active = 1;
    }

    if (btn.classList.contains("equals") && active == 1 && !start) {
      nums[0] = result.textContent = operate(nums[0], operator, nums[1]);
      start = true;
      canCalc = false;
      canSwap = true;
      active = 0;
      count = 0;
    }

    if (btn.classList.contains("dot") && count < 1) {
      nums[active] += btn.textContent;
      result.textContent += btn.textContent;
      count++;
    }

    if (btn.classList.contains("sign") && canSwap) {
      nums[active] = -nums[active];
      result.textContent = -result.textContent;
    }

    if (btn.classList.contains("delete")) {
    }

    if (btn.classList.contains("clear")) {
      console.clear();
      operator = "";
      onDecimal = false;
      count = 0;
      limit = 0;
      active = 0;
      start = true;
      canSwitch = false;
      nums[0] = nums[1] = 0;
      result.textContent = 0;
    }
    console.log(nums);
    console.log(active);
  });
}
*/
