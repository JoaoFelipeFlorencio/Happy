//import dependecies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
//inializing express
const server = express();
server
  //utilizing body of the request
  .use(express.urlencoded({ extend: true }))
  //utilizing static files
  .use(express.static("public"))
  //conf template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  //routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);
//start server
server.listen(5500);
