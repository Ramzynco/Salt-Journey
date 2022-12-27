const express = require('express')
const app = express()

app.get('/greet/:name', (req, res) => {
  res.send('Welcome to SALT, ' + req.params.name);
});

app.listen(3000);
console.log(`Open http://localhost:3000/greet/Marcus`);