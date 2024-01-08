const express = require("express");
const path = require("path");
var hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public"); //for the static page
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// app.use(express.static(staticPath)); //satic page

app.set("view engine", "hbs"); // created views directory in root folder and set the template engine// inside views created hbs files similar to html
app.set("views", template_path); // changed the views dir location

hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error");
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
