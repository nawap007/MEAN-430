const express = require('express');

const user = require('../models/user');

const router = express.Router();
router.get('/', (req, res) => {
    user.find({}).then((docs) => {
        res.status(200).json(docs);
    }).catch((err) => {
        res.status(500).send('Internal Server Error');
    });
}).get('/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id).then((doc) => {
        res.status(200).json(doc);
    }).catch((err) => {
        res.status(500).send('Internal Server Error');
    });
}).post('/', (req, res) => {
    const body = req.body;
    const obj = new user(body);
    obj.save().then(() => {
        res.status(201).send('created');
    }).catch((err) => {
        res.status(500).send('Internal Server Error');
    });
}).put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id == body._id) {
        user.findByIdAndUpdate(id, { name: body.name, address: body.address, contact: body.contact }).then(() => {
            res.status(200).send('updated');
        }).catch((err) => {
            res.status(500).send('Internal Server Error');
        });
    }
    else {
        res.status(403).send('not modified');
    }
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    user.findByIdAndRemove(id).then(() => {
        res.status(200).json('ok');
    }).catch((err) => {
        res.status(500).send('Internal Server Error');
    });
});

module.exports = router;