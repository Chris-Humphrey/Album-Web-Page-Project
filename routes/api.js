let express = require("express");
let router = express.Router();
let data = require('../data/feedback.json');
let bodyParser = require('body-parser');
let fs = require('fs');

router.get('/api', (req, res) => {
    res.json(data);
});

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/api', (req, res) => {
    data.unshift(req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(data), 'utf8', (err)=>{
        console.log(err);
    });
    res.json(data)
});



module.exports = router;