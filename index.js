
const express = require('express');
const app = express();
app.use(express.json());

app.get('/factorial/:n', (req, res) => {
    let n = Number(req.params.n);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    res.send(`Factorial of ${n} is ${fact}`);
});


app.get('/sum/:n', (req, res) => {
    let n = Number(req.params.n);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    res.send(`Sum of numbers from 1 to ${n} is ${sum}`);
});


app.get('/reverse/:str', (req, res) => {
    let str = req.params.str;
    let reversed = str.split('').reverse().join('');

    res.send(`Reversed string of ${str} is ${reversed}`);
});


app.post('/factorial', (req, res) => {
    let n = Number(req.body.n);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    res.json({ factorial: fact });
});


app.post('/sum', (req, res) => {
    let n = Number(req.body.n);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    res.json({ sum: sum });
});


app.post('/reverse', (req, res) => {
    let text = req.body.text;
    let reversed = text.split('').reverse().join('');

    res.json({ reversed: reversed });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
