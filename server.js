const express = require('express');
const port = process.env.PORT || 8000;

const app = express();



app.get('/', function(req, res)
{
    res.send("The server is running.");
});




app.listen(port, function(err){
    if (err) {
        console.error("Error starting server: ", err);
}
console.log(`server is running at port ${port}` );
});