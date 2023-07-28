const express = require('express');
var cors = require('cors');

const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
require('./db/conn');


const app = express();
app.use(cors(
    {
        origin :['https://codecreators.onrender.com']
    }
));
const port = process.env.PORT  || 5000;


app.use(express.json());
app.use("/imagesvedio",express.static("imagesvedio"));



app.use(require('./Client/router/Autentication'));
app.use(require('./Admin/Router/TopicsStore'));
app.use(require('./Client/router/GetContent'));
app.use(require('./Client/router/QusAns'));

app.use(express.static(path.join(__dirname, '/RYSCODE/build')))
app.get('*',(res,req)=>{
    res.sendFile(path.join(__dirname, '/RYSCODE/build/index.html'));
})

app.listen(port, () => {
    console.log(`Connection successfully on port ${port} `);
})
