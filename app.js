const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/calculate', (req, res) => {
    // Retrieve query parameters
    const operation = req.query.operation;
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
  
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }
  
    // Send the result back to the client
    res.send(`Result: ${result}`);
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
