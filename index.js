const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

// use express router
app.use('/', require('./routes'));
 
// set up our view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in Running the Server: ${err}`);
    }
    console.log(`Server is Running in the port: ${port}`);
});