"use strict";
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalto = document.querySelector("#equalto");
const clear = document.querySelector("#clearall");
const inputField = document.querySelector("#input");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const backspace = document.querySelector("#backspace");

const removeAllSpaces = function (string) {
  let noSpaceInput = "";
  for (const char of string) {
    if (char === " ") {
      continue;
    } else {
      noSpaceInput += char;
    }
  }
  return noSpaceInput;
};

const inputArrayInString = function (string) {
  const numAndOperator = [];
  let i = 0;
  for (const char of string) {
    if (typeof numAndOperator[i] === "undefined") {
      numAndOperator[i] = "";
    }
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      i++;
      numAndOperator[i] = char;
      i++;
    } else {
      numAndOperator[i] += char;
    }
  }
  return numAndOperator;
};

const inputArrayNumbers = function (array) {
  const finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "+" ||
      array[i] === "-" ||
      array[i] === "*" ||
      array[i] === "/"
    ) {
      finalArray.push(array[i]);
    } else {
      finalArray.push(Number(array[i]));
    }
  }
  return finalArray;
};

const calculate = function () {
  const input = inputField.value;
  const trimmedInput = input.trim();
  const noSpaceInput = removeAllSpaces(trimmedInput);
  const stringComponents = inputArrayInString(noSpaceInput);
  const finalInput = inputArrayNumbers(stringComponents);
  let number1 = finalInput[0];
  let operation1 = finalInput[1];
  let answer;
  for (let i = 2; i < finalInput.length; i = i + 2) {
    const number2 = finalInput[i];
    if (operation1 === "+") {
      answer = number1 + number2;
    } else if (operation1 === "-") {
      answer = number1 - number2;
    } else if (operation1 === "*") {
      answer = number1 * number2;
    } else if (operation1 === "/") {
      answer = number1 / number2;
    }
    number1 = answer;
    operation1 = finalInput[i + 1];
  }
  inputField.value = answer;
};

one.addEventListener("click", function () {
  inputField.value += "1";
});
two.addEventListener("click", function () {
  inputField.value += "2";
});
three.addEventListener("click", function () {
  inputField.value += "3";
});
four.addEventListener("click", function () {
  inputField.value += "4";
});
five.addEventListener("click", function () {
  inputField.value += "5";
});
six.addEventListener("click", function () {
  inputField.value += "6";
});
seven.addEventListener("click", function () {
  inputField.value += "7";
});
eight.addEventListener("click", function () {
  inputField.value += "8";
});
nine.addEventListener("click", function () {
  inputField.value += "9";
});
zero.addEventListener("click", function () {
  inputField.value += "0";
});
point.addEventListener("click", function () {
  inputField.value += ".";
});
backspace.addEventListener("click", function () {
  const input = inputField.value;
  const backInput = input.slice(0, input.length - 2);
  inputField.value = backInput;
});

addButton.addEventListener("click", function () {
  const input = inputField.value;
  inputField.value = `${input} + `;
});

subtractButton.addEventListener("click", function () {
  const input = inputField.value;
  inputField.value = `${input} - `;
});

multiplyButton.addEventListener("click", function () {
  const input = inputField.value;
  inputField.value = `${input} * `;
});

divideButton.addEventListener("click", function () {
  const input = inputField.value;
  inputField.value = `${input} / `;
});

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});

equalto.addEventListener("click", function () {
  calculate();
});

clear.addEventListener("click", function () {
  inputField.value = "";
});
