const   express = require ('express'),
        path = require ('path'),
        bodyParser = require ('body-parser'),
        mongoose = require ('mongoose'),
        cors = require ('cors'),
        passport = require ('passport'),
        app = express(),
        port = 3000,
        employees = require('./routes/employees'),
        config = require ('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('Connection to database '+config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Database error '+err);
});

app.use(cors());
app.use( bodyParser.json());
//using passport for authentication
app.use(passport.initialize());
app.use(passport.session());
require ('./config/passport')(passport);

app.use(express.static(path.join(__dirname, 'public')))
app.use('/employees',employees);
app.get('/', (rep, res)=>{
    res.send('Rendu du serveur')
})
app.listen( port, ()=>{
    console.log('Server started on port '+port);

})
    

