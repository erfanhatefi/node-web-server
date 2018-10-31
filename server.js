const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));        //app.use takes the middleware function we want to use

//we would register a handler
//it has two arguments ; one would be the URL and the second one would be the function to run
app.get('/' , function(req, res){
    //res.send('Hello express');     //this would let us respond to the request sent
    res.send({
        name: 'Andrew',
        likes: [
            'biking',
            'coding'
        ]
    });
});

app.get('/about', function(req, res){
    res.send({
        author: 'Randkill',
        dateModified: '2018'
    });
});

app.get('/bad', function(req, res){
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, function(){
    console.log('Server is up on port -> 3000');
});   //it`s gonna bind our application to a port on our machine, in this case port 3000