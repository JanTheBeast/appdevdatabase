const express = require("express")

const commentsDB = require("../data/helpers/commentModel")

const auth = require("../auth")

const router = express.Router()

router.use(express.json())

router.get("/", auth, (req, res) => {
  commentsDB.get()
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your comments", err })
    })
})

router.post("/", auth, (req, res) => {
  commentsDB.insert(req.body)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your comment", err })
    })
})

router.get("/:id/", auth, (req, res) => {
  commentsDB.get(req.params.id)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your comment", err })
    })
})

router.put("/:id", auth, (req, res) => {
  commentsDB.update(req.params.id, req.body)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your comment", err })
    })
})

router.delete("/:id", auth, (req, res) => {
  commentsDB.remove(req.params.id, req.body)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your comment", err })
    })
})

module.exports = router
