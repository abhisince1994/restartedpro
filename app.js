const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to show the form with two input fields: title and size
app.use('/add-product', (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title" placeholder="Product Title">
      <input type="text" name="size" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/product', (req, res, next) => {
  // Log the parsed form data (title and size) to the console
  console.log(req.body); // { title: 'user-input-title', size: 'user-input-size' }
  res.redirect('/');
});

// Default route
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
