const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const employees = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
  { id: 3, name: 'Bob Smith', age: 35 }
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employeesFromFile', (req, res) => {
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const employeesFromFile = JSON.parse(data);
    res.json(employeesFromFile);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
