let express = require('express');
let app = express();
let port = 3000;


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views')

// access to CORS needs to be above the routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/albums'));
app.use(require('./routes/api'));


app.listen(port, ()=>{
    console.log(`The server is now running on port ${port}.`)
})