const express = require("express");
const path = require("path");

const routes = express.Router();

const homeData = require("./home");

routes.get("/users", (req, res, next) => {
  const users = homeData.users;
  res.render("users", { docTitle: "Users", path: "/users", users: users });
});

module.exports = {
  usersRoutes: routes,
};
