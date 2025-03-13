const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    data: "Welcome to the Home Page",
    currentRoute: req.url,
    noLayout: true,
  });
});
app.get("/restaurants", (req, res) => {
  res.render("restaurants", {
    title: "Restaurants",
    data: "Restaurants Page",
    currentRoute: req.url,
    noLayout: true,
  });
});
app.get("/menu", (req, res) => {
  res.render("browse_menu", {
    title: "Browse Menu",
    data: "Browse Menu Page",
    currentRoute: req.url,
    noLayout: true,
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
    data: "User Login Page",
    currentRoute: req.url,
    noLayout: false,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
