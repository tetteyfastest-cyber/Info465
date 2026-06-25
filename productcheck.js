const readline = require("readline");

// This is creating input/output interface for terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This Store all valid integers
let numbers = [];

// This is asking user for integers until they type q or Q
function askForInput() {
  rl.question("Enter an integer or q to quit: ", (input) => {
    if (input.toLowerCase() === "q") {
      checkCondition();
      rl.close();
      return;
    }

    const number = Number(input);

    // this is the Error handling for invalid input
    if (!Number.isInteger(number)) {
      console.log("Error: Please enter an integer or q to quit.");
    } else {
      numbers.push(number);
    }

    askForInput();
  });
}

// Checking if the product of any two numbers equals a third number
function checkCondition() {
  console.log("\nIntegers entered:", numbers);

  if (numbers.length < 3) {
    console.log("Condition was not met");
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const product = numbers[i] * numbers[j];

      if (numbers.includes(product)) {
        console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
        return;
      }
    }
  }

  console.log("Condition was not met");
}

askForInput();