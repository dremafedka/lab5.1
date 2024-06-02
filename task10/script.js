function checkBrackets(str) {

  const stack = [];

  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

document.getElementById('check-button').addEventListener('click', () => {
  const codeInput = document.getElementById('code-input').value;
  const result = checkBrackets(codeInput);
  const resultDiv = document.getElementById('result');

  if (result) {
    resultDiv.textContent = "The brackets are correctly balanced.";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "The brackets are not correctly balanced.";
    resultDiv.style.color = "red";
  }
});
