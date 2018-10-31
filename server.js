const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');  //first one is key and the second one is the value
app.use(express.static(__dirname + '/public'));        //app.use takes the middleware function we want to use

//we would register a handler
//it has two arguments ; one would be the URL and the second one would be the function to run
app.get('/' , function(req, res){
    //res.send('Hello express');     //this would let us respond to the request sent
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessageProp: 'Welcome to my page',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', function(req, res){
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
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