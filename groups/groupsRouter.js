const express = require("express")

const groupsDB = require("../data/helpers/groupModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  groupsDB.get()
    .then(groups => {
      res.status(200).json(groups)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your groups", err })
    })
})

router.post("/", (req, res) => {
  groupsDB.insert(req.body)
    .then(groups => {
      res.status(200).json(groups)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your group", err })
    })
})

router.get("/:id/", (req, res) => {
  groupsDB.get(req.params.id)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your group", err })
    })
})

router.put("/:id", (req, res) => {
  groupsDB.update(req.params.id, req.body)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your group", err })
    })
})

router.delete("/:id", (req, res) => {
  groupsDB.remove(req.params.id, req.body)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your group", err })
    })
})

module.exports = router
