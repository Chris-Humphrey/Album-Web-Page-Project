let express = require("express");
let router = express.Router();


router.get('/feedback', function(req, res) {
    res.render('feedback');
});



module.exports = router;