const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");
const path = require("path");


//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'/public')));

//declaring engine
app.set("view engine", "ejs");
app.set("views", "views")

//main routes
app.use("/admin", usersRoutes.usersRoutes);
app.use(homeRoutes.homeRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", {docTitle : "Error 404",path :""});
});

app.listen(4000);
