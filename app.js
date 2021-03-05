const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');
 // to store important info
const cookiesParser = require('cookie-parser');
const session = require('express-session');
const PORT= 4000;
app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
// Setup cookie
app.use(session({
    secret : "plushOne", // Key cookie
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60*60*1000 } // expire time cookie 
}))

//parse URL-encoded bodies (as sent by HTML forms)
//make sure we can grab the data from any form
app.use(express.urlencoded({extended: false}));
//grab the form coming in as json
app.use(express.json());
app.use(cookiesParser());

//define Routes
app.use('/', require('./routes/pages'));
// redirecting to file routes/auth
app.use('/auth',require('./routes/auth'));
app.use('/upload',require('./routes/upload'));

app.listen(process.env.PORT||PORT, () => {
    console.log(`Server listening on: http://localhost:${process.env.PORT||PORT}`);
})