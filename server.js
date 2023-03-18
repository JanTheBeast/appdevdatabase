const express = require('express');
const helmet = require('helmet');
// const jwt = require('jsonwebtoken');

const notesRouter = require("./routers/notesRouter");
const accountsRouter = require("./routers/accountsRouter");
const commentsRouter = require("./routers/commentsRouter");
const groupsRouter = require("./routers/groupsRouter");

const server = express();

server.use(helmet());

server.use("/api/drops", notesRouter);
server.use("/api/accounts", accountsRouter);
server.use("/api/comments", commentsRouter);
server.use("/api/groups", groupsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS WORKING" });
})

module.exports = server;
