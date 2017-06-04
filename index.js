const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen( process.env.PORT || 3000, () => console.log('Server is running !!!'));
app.get('/', (req, res) => res.render('home'));

app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/checkout', (req, res) => res.render('checkout'));
app.get('/mens', (req, res) => res.render('mens'));
app.get('/womens', (req, res) => res.render('womens'));
app.get('/single', (req, res) => res.render('single'));
app.get('/other', (req, res) => res.render('other'));
