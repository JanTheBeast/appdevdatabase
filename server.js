const express = require('express');
const helmet = require('helmet');

const notesRouter = require("./notes/notesRouter");
const accountsRouter = require("./accounts/accountsRouter");
const commentsRouter = require("./comments/commentsRouter");
const groupsRouter = require("./groups/groupsRouter");

const server = express();

server.use(helmet());

server.use("/api/notes", notesRouter);

server.use("/api/accounts", accountsRouter);

server.use("/api/comments", commentsRouter);

server.use("/api/groups", groupsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS WORKING" });
})

module.exports = server;
