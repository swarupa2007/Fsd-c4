const express = require("express");
const path = require("path");

const server= express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("exp", {
        title: "Home Page",
        error: null,
        user: "Swarupa"
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});