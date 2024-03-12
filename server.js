const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(8080, function(){
    console.log('Server is running on port 8080');
});
