const express = require('express');
const router = express.Router();

const items = require('../items');

router.get('/video/home.mp4', (req, res) => {
    console.log('Achtung!');
});

router.get('/', (req, res) => {
    res.render('items', {items});
});

router.get('/items', (req, res) => {
    res.json(items);
});

router.get('/products/:itemsId', (req, res) =>  {
    res.render('item', {
        name: [items[req.params["itemsId"]-1].name]
    });
});

module.exports = router;