const express = require("express");
const app = express();
const morgan = require("morgan")
const path = require("path");
const hbs = require("express-handlebars");
const db = require("./database")
const port  = process.env.PORT || 3000;
const routing = require("./routes");
const errorHandler = require('errorhandler'); 

app.set("views", path.join(__dirname, "/views/"));
app.set("view engine", "hbs");
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routing);

/*
if (process.env.NODE_ENV === 'production') {
    app.use((err, req, res, next) => {

        const code = err.code || 500;

        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        });
    })
} else {

    app.use(errorHandler);
}
*/

app.listen(port);