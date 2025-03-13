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
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("home", { title: "Home", data: "Welcome to the Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", data: "About Us Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", data: "Contact Us Page" });
});

app.get("/profile", (req, res) => {
  res.render("profile", { title: "Profile", data: "Your Profile Page" });
});

app.get("/settings", (req, res) => {
  res.render("settings", { title: "Settings", data: "Settings Page" });
});
app.get("/form", (req, res) => {
  res.render("form", { title: "Form", data: "Upload a file" });
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.send("Please upload a file.");
  }
  res.send(`File uploaded successfully: <b>${req.file.filename}</b>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
