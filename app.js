const express = require("express");
const app = express();
const morgan = require("morgan")
const path = require("path");
const hbs = require("express-handlebars");
const port  = process.env.PORT || 3000;
const index = require("./routes/index.js");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));


//hbs.registerPartials(path.join(__dirname, "./views/partials"));


app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(port);