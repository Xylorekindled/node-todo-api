var express = require('express');
var bodypaser = require('body-parser');
var { ObjectId } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodypaser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({todos});
        }, (e) => {
            res.status(400).send(e);
        })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectId.isValid(id))
    {
        return res.status(404).send();
    }

    Todo.findById(id)
        .then((todo) => {
            if(!todo) return res.status(40).send();
            res.send({todo});
        })
        .catch((e) => {
            res.status(404).send();
        })
    
    // findById
        // Success
            // send back to-do
            // if not found send 404
        // Error
            // send 404 status
});

app.listen(3000, () => {
    console.log('Started Server on port:3000');
})

module.exports = { app };