const express = require('express');
const app = express();

const path = require('path'); 
require('dotenv').config({path: path.join(__dirname, '.env') });
console.log(process.env)

app.use('/order', require('./domain/routes/order_route'));
app.use('/book', require('./domain/routes/book_route'));

const PORT = process.env.PORT
const DATABASE = "foo"
app.listen(PORT, console.log(`Server has started:\n -port:${PORT}\n -db:${DATABASE}\n`))