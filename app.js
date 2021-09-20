const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("index");
});

app.get("/home", function (req, res) {
    res.render("home");
});

app.get("/home", function (req, res) {
    res.render("home");
});

app.get("/list", function (req, res) {
    res.render("list");
});

app.get("/cse", function (req, res) {
    res.render("cse");
});
app.get("/it", function (req, res) {
    res.render("it");
});
app.get("/eee", function (req, res) {
    res.render("eee");
});
app.get("/ece", function (req, res) {
    res.render("ece");
});
app.get("/me", function (req, res) {
    res.render("me");
});
app.post("/response", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.message;

});

let port = process.env.PORT;
if (port == "" || port == null) {
    port = 3000;
}


app.listen(port, function () {
    console.log("Server running on port : 3000 ");
});