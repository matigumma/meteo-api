const express = require('express');
const path = require('path');

const app = express();
require('./db');
app.set('port', process.env.PORT || 5001);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

//.get('/', (req, res) => res.render('pages/index'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//routes
app.use(require(path.join(__dirname,'routes')));
//app.use(require(path.join(__dirname,'routes/api')));
//public
app.use(express.static(path.join(__dirname, 'public')));
//start
app.listen(app.get('port'));