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
    title: 'STM Biomedical | Home'
  });
});

app.get('/about', function(req, res) {
  res.render('about', {
    title: 'STM Biomedical | About'
  });
});

app.get('/services', function(req, res) {
  res.render('services', {
    title: 'STM Biomedical | Services'
  });
});

app.get('/careers', function(req, res) {
  res.render('careers', {
    title: 'STM Biomedical | Careers'
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'STM Biomedical | Contact'
  });
});


// start server
app.listen(4000, function() {
  console.log('website running on port 4000');
});