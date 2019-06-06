let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views')

// CORS
// access to CORS needs to be above the routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// APP.USE to grab routes from routes files
app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/albums'));


app.listen(port, ()=>{
    console.log(`The server is now running on port ${port}.`)
})