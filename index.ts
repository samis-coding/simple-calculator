#!/usr/bin/env node

import inquirer from "inquirer";

async function askquestion() {
  const answer = await inquirer.prompt([
    { message: "Give first number: ", type: "number", name: "firstNumber" },
    { message: "Give second number: ", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operation to perform your required action",
      type: "list",
      name: "operator",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Exponent of first number",
        "Exponent of second number"
      ],
    },
  ]);

  return answer; // Returning the answer for further processing
}

async function main() {
  const answer = await askquestion();
  console.log(answer);

  if (answer.operator === "Addition"){
    let ad = answer.firstNumber + answer.secondNumber;
    console.log("Your answer of addition of " + answer.firstNumber + " and " + answer.secondNumber + " is " + ad);
  }

  else if (answer.operator === "Substraction"){
    let sub = answer.firstNumber - answer.secondNumber;
    console.log("Your answer of substraction of" + answer.firstNumber + " and " + answer.secondNumber + " is " + sub);
  }
  
  else if (answer.operator === "Multiplication"){
    let mul = answer.firstNumber * answer.secondNumber;
    console.log("Your answer of multiplication of " + answer.firstNumber + " and " + answer.secondNumber + " is " + mul);
  }
  
  else if (answer.operator === "Division"){
    let div = answer.firstNumber / answer.secondNumber;
    console.log("Your answer of division of " + answer.firstNumber + " and " + answer.secondNumber + " is " + div);
  }
  
  else if (answer.operator === "Exponent of first number"){
    let exfirst = answer.firstNumber **2;
    console.log("Your answer of exponent of " + answer.firstNumber + " is " + exfirst);
  }
  
  else if (answer.operator === "Exponent of Second number"){
    let exsecond = answer.secondNumberNumber **2;
    console.log("Your answer of exponent of " + answer.secondNumber + " is " + exsecond);
  }
  else {
    console.log("Please select a valid operator")
  }

}



main(); // Invoke the main function to start the process
// conditional statment

