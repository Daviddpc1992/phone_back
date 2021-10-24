const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();


require('./dbConfig');

const indexRouter = require('./routes/index');
const phonesRouter = require('./routes/phones');
const apiRouter = require('./routes/api')

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/phones', phonesRouter);
app.use('/api', apiRouter)


app.use(function (req, res, next) {
  next(createError(404));
});
app.get("/", function (req, res, next) {

  res.render("index");
})

app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;