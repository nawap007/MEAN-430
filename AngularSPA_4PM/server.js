const express = require('express'),
    bodyParser = require('body-parser'),
    apiRoutes= require('./server/routes/api.routes'),
    cors= require('cors'),
    dbCon= require('./server/config/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());
app.use('/api',apiRoutes);

const port = process.env.PORT || 1300;
app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
