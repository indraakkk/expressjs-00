// const R = require('ramda');
// const result = R.add(10, 1);

// console.log(result);


/*
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/profile', (req, res) => res.send('This my profile'))
app.get('/profile/setting', (req, res) => res.send('This is my setting'))

app.listen(3000, () => console.log('express example'));
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let chair = require('./data')

app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Welcome to Fake JSON API'))
app.get('/api/chair', (req, res) => {res.send(chair)})

const addChair = (list, item) => {
    list.push(item)
    return list
}

app.post('/api/chair', (req, res) => {
    const newChair = req.body
    const newItemChair = addChair(chair, newChair)
    chair = newItemChair
    res.send(chair)
})

app.listen(3000, () => console.log('Fake JSON API'))


