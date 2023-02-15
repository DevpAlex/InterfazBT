process.env.TZ = 'America/Bogota'
const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./src/routes/routes'))


// server
app.set('port', process.env.PORT || 9000)
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})