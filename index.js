const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(3000, (req, res) => { console.log('Server is running !!!') });
app.get('/', (req, res) => {res.render('index')});