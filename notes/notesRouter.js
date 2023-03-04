const express = require("express")

const notesDB = require("../data/helpers/noteModel")

const router = express.Router()

router.use(express.json())

router.get("/", (req, res) => {
  notesDB.get()
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your notes", err })
    })
})

router.post("/", (req, res) => {
  notesDB.insert(req.body)
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your note", err })
    })
})

router.get("/:id/", (req, res) => {
  notesDB.get(req.params.id)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your note", err })
    })
})

router.put("/:id", (req, res) => {
  notesDB.update(req.params.id, req.body)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your note", err })
    })
})

router.delete("/:id", (req, res) => {
  notesDB.remove(req.params.id, req.body)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your note", err })
    })
})

router.get("/:minLat/:minLong/:maxLat/:maxLong", (req, res) => {
  notesDB.getLocationRange(req.params.minLat, req.params.minLong, req.params.maxLat, req.params.maxLong)
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your notes in range", err })
    })
})

module.exports = router
