const express= require('express'),
      bodyParser= require('body-parser'),
      cors= require('cors'),
      con= require('./server/config/db'),
      apiRoutes= require('./server/routes/apiRoutes');

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.use('/api',apiRoutes);

app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});
