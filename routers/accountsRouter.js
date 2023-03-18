const express = require("express")

const accountsDB = require("../data/helpers/accountModel")

const auth = require("../auth")

const router = express.Router()

router.use(express.json())

router.get("/", auth, (req, res) => {
  accountsDB.get()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your accounts", err })
    })
})

router.post("/", auth, (req, res) => {
  accountsDB.insert(req.body)
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your account", err })
    })
})

router.get("/:id/", auth, (req, res) => {
  accountsDB.get(req.params.id)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your account", err })
    })
})

router.get("/name/:name/", auth, (req, res) => {
  accountsDB.getByName(req.params.name)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your account", err })
    })
})

router.put("/:id", auth, (req, res) => {
  accountsDB.update(req.params.id, req.body)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your account", err })
    })
})

router.delete("/:id", auth, (req, res) => {
  accountsDB.remove(req.params.id, req.body)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong deleting your account", err })
    })
})

module.exports = router
