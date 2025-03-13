const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

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
    title: "About",
    data: "About Us Page",
    currentRoute: req.url,
    noLayout: true,
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title: "About",
    data: "About Us Page",
    currentRoute: req.url,
    noLayout: false,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
