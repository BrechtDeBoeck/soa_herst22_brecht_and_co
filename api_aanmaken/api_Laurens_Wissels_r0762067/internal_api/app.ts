const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');

require('dotenv').config({path: path.join(__dirname, '.env') });

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/book', require('./domain/routes/book_route'));

const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
app.listen(PORT, console.log(`Server has started:\n -port:${PORT}\n -db:${DATABASE}\n`))