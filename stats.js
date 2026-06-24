const readline = require("readline");

// interface for reading user input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store all valid integers entered by the user
let numbers = [];

// Function that repeatedly asks the user for input
function askForNumber() {
  rl.question("Enter an integer or q to quit: ", (input) => {
    // Allows the user to stop entering numbers
    if (input.toLowerCase() === "q") {
      if (numbers.length === 0) {
        console.log("No numbers were entered.");
        rl.close();
        return;
      }

      // Sort numbers from smallest to largest
      numbers.sort((a, b) => a - b);

      const count = numbers.length;
      const sum = numbers.reduce((total, num) => total + num, 0);
      const mean = sum / count;
      const min = numbers[0];
      const max = numbers[count - 1];

      // Calculate median
      let median;
      const middle = Math.floor(count / 2);

      if (count % 2 === 0) {
        median = (numbers[middle - 1] + numbers[middle]) / 2;
      } else {
        median = numbers[middle];
      }

      // Display results
      console.log("\nResults:");
      console.log("Numbers entered:", numbers);
      console.log("Mean:", mean);
      console.log("Median:", median);
      console.log("Count:", count);
      console.log("Minimum:", min);
      console.log("Maximum:", max);

      rl.close();
    } else {
      const number = Number(input);

      // Error handling for non-integer input
      if (!Number.isInteger(number)) {
        console.log("Error: Please enter a valid integer.");
      } else {
        numbers.push(number);
      }

      askForNumber();
    }
  });
}

askForNumber();