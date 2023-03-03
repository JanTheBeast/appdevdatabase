const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require("./actions/actionsRouter")
const notesRouter = require("./notes/notesRouter")
const accountsRouter = require("./accounts/accountsRouter")

const server = express();

server.use(helmet());

server.use('/api/projects', projectsRouter);

server.use("/api/actions", actionsRouter)

server.use("/api/notes", notesRouter)

server.use("/api/accounts", accountsRouter)

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS WORKING" })
})

module.exports = server;
