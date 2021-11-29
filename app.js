"use strict";
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MY_DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true });

const smitSchema = new mongoose.Schema({
    name: String,
    date: String,
    class10: String,
    class12: String,
    email: String,
    phone: String,
    address: String
});

const Data = mongoose.model("Data", smitSchema);

const add_data = new Data({
    name: "Tushar Nayan",
    date: "10/08/2000",
    class10: "84.6",
    class12: "70.4",
    email: "tusharnayan10@gmail.com",
    phone: "7398254590",
    address: "Sector-4,Green Park,Bareilly,Uttar Pradesh,PIN-243001"
});

// add_data.save();

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

app.get("/lab6", function (req, res) {
    res.render("lab6");
});
app.get("/lab-8", function (req, res) {
    res.render("lab-8");
});
app.get("/lab-9", function (req, res) {
    res.render("lab-9");
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
    const date = req.body.date;
    const class10 = req.body.class10;
    const class12 = req.body.class12;
    const phone = req.body.phone;
    const address = req.body.address;

    const msg = "Name: " + name + "      Email: " + email + "      Contact No: " + phone + "    Address: " + address + "\n DOB: " + date + "    Class X: " + class10 + "     Class XII: " + class12;
    const add_data = new Data({
        name: name,
        date: date,
        class10: class10,
        class12: class12,
        email: email,
        phone: phone,
        address: address
    });
    add_data.save(function (err) {
        if (!err) {
            res.render("success", { msg: msg });
        }
        else {
            console.log(err);
        }
    });
    console.log("Name: " + name + " Email: " + email + " Contact No: " + phone + " Address: " + address + " DOB: " + date + " Class X: " + class10 + " Class XII: " + class12);
});

app.get("/form", function (req, res) {
    res.render("form");
});

app.get("/success", function (req, res) {
    res.render("success", { msg: '' });
});

let port = process.env.PORT;
if (port == "" || port == null) {
    port = 3000;
}


app.listen(port, function () {
    console.log("Server running on port : 3000 ");
});