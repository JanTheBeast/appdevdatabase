const express = require("express")

const commentsDB = require("../data/helpers/commentModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  commentsDB.get()
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your comments", err })
    })
})

router.post("/", (req, res) => {
  commentsDB.insert(req.body)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your comment", err })
    })
})

router.get("/:id/", (req, res) => {
  commentsDB.get(req.params.id)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your comment", err })
    })
})

router.put("/:id", (req, res) => {
  commentsDB.update(req.params.id, req.body)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your comment", err })
    })
})

router.delete("/:id", (req, res) => {
  commentsDB.remove(req.params.id, req.body)
    .then(comment => {
      res.status(200).json(comment)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your comment", err })
    })
})

module.exports = router
