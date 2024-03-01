const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const passport = require('passport'); //authentication middleware for express.js
const LocalStrategy = require('passport-local'); //passport strategy for local authentication using username and password
const passportLocalMongoose = require('passport-local-mongoose'); //A plugin for passport that automatically handles user registration and authentication using the Mongoose user model.
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const User = require('./app/models/User');
const route = require('./routes');

const db = require('./config/db')

//connect DB
db.connect()

//http logger
app.use(morgan('combined')); // for logging HTTP requests and responses, providing detailed information about each interaction

//template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    //middleware xu ly form
    extended: true,
  }),
);
app.use(express.json());

//Routes init
route(app);


app.use(
  require('express-session')({
    secret: 'binkjenniekim', // A string used to sign session cookies and ensure their integrity.
    resave: false, //Prevents unnecessary session saves when the session data is unmodified.
    saveUninitialized: false, //Prevents unnecessary storage of empty sessions.
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
