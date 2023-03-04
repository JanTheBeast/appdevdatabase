const express = require('express');
const helmet = require('helmet');

const notesRouter = require("./notes/notesRouter");
const accountsRouter = require("./accounts/accountsRouter");
const commentsRouter = require("./comments/commentsRouter");

const server = express();

server.use(helmet());

server.use("/api/notes", notesRouter);

server.use("/api/accounts", accountsRouter);

server.use("/api/comments", commentsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS WORKING" });
})

module.exports = server;
