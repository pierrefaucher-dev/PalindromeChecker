'use strict';

const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function isPalindrome () {
  const inputContentRaw = textInput.value;
  const inputContent = inputContentRaw.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const inputLength = inputContent.split("").length;

  if (inputContent === "") alert("Please input a value");
  if (inputLength === 1) {
    result.innerHTML = `${inputContentRaw} is a palindrome`;
    return;
  }

  let i = 0;
  let j = inputLength - 1;
  while (i < Math.floor(inputLength / 2)) {
    if (inputContent[i] !== inputContent[j]) {
      result.innerHTML = `${inputContentRaw} is not a palindrome`;
      return;
    }
    j--;
    i++;
  }
  result.innerHTML = `${inputContentRaw} is a palindrome`;
}

checkBtn.addEventListener("click", isPalindrome);
