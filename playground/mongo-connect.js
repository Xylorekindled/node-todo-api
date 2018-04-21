const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) return console.log('Connection Error: unable to connect', err);

    console.log('Connected');

    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err) return console.log('Insert One: Failed', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});