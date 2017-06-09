const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('admin', express.static('public/admin'));

app.listen(process.env.PORT || 3000, () => console.log('Server is running !!!'));
app.get('/', (req, res) => res.render('home'));
//dieu hướng phần customer
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/checkout', (req, res) => res.render('checkout'));
app.get('/mens', (req, res) => res.render('mens'));
app.get('/womens', (req, res) => res.render('womens'));
app.get('/single', (req, res) => res.render('single'));
app.get('/other', (req, res) => res.render('other'));
//

//điều hướng phần admin
app.get('/manager', (req, res) => res.render('./manager/index'));
app.get('/admin', (req, res) => res.render('./manager/admin'));
