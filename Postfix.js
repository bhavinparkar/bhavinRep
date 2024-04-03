const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function evaluatePostfix(expression) {
    const stack = [];

    // Remove spaces from the expression
    expression = expression.replace(/\s/g, '');

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }

    return stack.pop();
}

// Taking input from the user
rl.question("Enter a postfix expression: ", (expression) => {
  const result = evaluatePostfix(expression);
  console.log("Result:", result);

  rl.close();
});
