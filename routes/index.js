let express = require("express");
let router = express.Router();

let data = require('../data/data.json')


router.get('/', (req, res)=>{
    let albums = data.Sublime;
    let tracks = [];

    albums.forEach(element => {
        tracks = tracks.concat(element.tracks);
    });

    res.render('index', {
        pageTitle: "Home",
        pageID: "home",
        tracks: tracks,
        albums: data.Sublime
    })
})


module.exports = router;