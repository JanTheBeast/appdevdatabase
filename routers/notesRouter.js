const express = require("express")

const notesDB = require("../data/helpers/noteModel")

const auth = require("../auth")

const router = express.Router()

router.use(express.json())

router.get("/", auth, (req, res) => {
  notesDB.get()
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your notes", err })
    })
})

router.post("/", auth, (req, res) => {
  notesDB.insert(req.body)
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your note", err })
    })
})

router.get("/:id/", auth, (req, res) => {
  notesDB.get(req.params.id)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your note", err })
    })
})

router.put("/:id", auth, (req, res) => {
  notesDB.update(req.params.id, req.body)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your note", err })
    })
})

router.delete("/:id", auth, (req, res) => {
  notesDB.remove(req.params.id, req.body)
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your note", err })
    })
})

router.get("/:minLat/:minLong/:maxLat/:maxLong", auth, (req, res) => {
  notesDB.getLocationRange(req.params.minLat, req.params.minLong, req.params.maxLat, req.params.maxLong)
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your notes in range", err })
    })
})

router.get("/:id/comments", auth, (req, res) => {
    notesDB.getNoteComments(req.params.id)
      .then(comments => {
        res.status(200).json(comments)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting your project actions", err })
      })
  })

module.exports = router
