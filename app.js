//Use variables in ENV
require("dotenv").config();

const Server = require("./models/server");

const server = new Server();

const express = require("express");

server.listen();
