const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));