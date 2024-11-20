const express = require('express');
const app = express();
//app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server Listing on PORT:", PORT)
});
app.get('/status',(resquest, response) => {
    const status = {
        "Status" : "Running"
    };
    response.send(status);
});
app.get('/add',(resquest, response) => {
    // const status = {
    //     "Status" : "Adding"
    // };
    const status = "Adding Users";
    response.send(status);
});
app.get('/',(resquest, response) => {
    const status = {
        "Home" : "Home"
    };
    response.send(status);
});