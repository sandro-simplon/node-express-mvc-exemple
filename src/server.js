const express = require('express');
const ejs = require('ejs');
const sass = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const router = require("./routers");

const server = express();

server.use(morgan('dev'));

server.use(sass({
  src: "./src",
  dest: "./src/assets"
}));

server.engine("ejs", ejs.renderFile);
server.set("views", "./src/views");
server.use(express.static("./src/assets"));

server.use(express.json());
server.use(cookieParser());

server.use(router);

server.listen(8080, () => {
  console.log("Server running at port 8080");
});