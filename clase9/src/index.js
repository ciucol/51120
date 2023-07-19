const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/users.router');
const petsRouter = require('./routes/pets.router');

const port = 3000;

const app = express();
console.log(__dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
