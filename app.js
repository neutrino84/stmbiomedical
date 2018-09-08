const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const app = express();

// set view engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'dist/favicon.ico'), { maxAge: 0 }));
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.render('index', {
  	title: 'STM BioMedical'
  });
});

// start server
app.listen(4000, function() {
  console.log('website running on port 4000');
});