let express = require("express");
let router = express.Router();

let data = require('../data/data.json')


router.get('/:albumid', (req, res)=>{
    let tracks = [];
    let albums = [];

    data.Sublime.forEach(element => {
        if(element.shortTitle == req.params.albumid){
            albums.push(element);
            tracks = tracks.concat(element.tracks);
        }
    });

    res.render('albums', {
        tracks: tracks,
        albums: albums
    })
})


module.exports = router;