const express = require('express');
const app = express();


app.set('view engine', 'ejs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index'));


app.post('/wishes', (req, res) => {
res.render('wishes', { name: req.body.name });
});


app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/cake', (req, res) => res.render('cake'));
app.get('/celebration', (req, res) => res.render('celebration'));


app.listen(3000, () => console.log('Server running on http://localhost:3000'));