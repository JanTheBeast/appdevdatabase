const express = require("express")

const groupsDB = require("../data/helpers/groupModel")

const auth = require("../auth")

const router = express.Router()

router.use(express.json())

router.get("/", auth, (req, res) => {
  groupsDB.get()
    .then(groups => {
      res.status(200).json(groups)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your groups", err })
    })
})

router.post("/", auth, (req, res) => {
  groupsDB.insert(req.body)
    .then(groups => {
      res.status(200).json(groups)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong adding your group", err })
    })
})

router.get("/:id/", auth, (req, res) => {
  groupsDB.get(req.params.id)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong getting your group", err })
    })
})

router.put("/:id", auth, (req, res) => {
  groupsDB.update(req.params.id, req.body)
    .then(group => {
      res.status(200).json(group)
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong updating your group", err })
    })
})

router.delete("/:id", auth, (req, res) => {
  groupsDB.remove(req.params.id, req.body)
      .then(comment => {
        res.status(200).json(comment)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting group members", err })
      })
})

router.get("/:id/members", auth, (req, res) => {
    groupsDB.getMembers(req.params.id)
      .then(comment => {
        res.status(200).json(comment)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting group members", err })
      })
})

router.get("/:id/notes/:minLat/:minLong/:maxLat/:maxLong", auth, (req, res) => {
    groupsDB.getNotesInRange(req.params.id, req.params.minLat, req.params.minLong, req.params.maxLat, req.params.maxLong)
      .then(comment => {
        res.status(200).json(comment)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting group notes", err })
      })
})

router.get("/:id/notes", auth, (req, res) => {
    groupsDB.getNotes(req.params.id)
      .then(comment => {
        res.status(200).json(comment)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting group notes", err })
      })
})

router.delete("/:id/:user_id", auth, (req, res) => {
    groupsDB.removeMember(req.params.id, req.params.user_id)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(500).json({ message: "something went wrong removing the group member", err })
        });
    
    groupsDB.removeEmptyGroups().then().catch();
    
})

router.post("/:id/:user_id", auth, (req, res) => {
    groupsDB.addMember(req.params.id, req.params.user_id)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(500).json({ message: "something went wrong adding the group member", err })
        })
})

router.post("/:id/name/:user_name", auth, (req, res) => {
    groupsDB.addMemberByName(req.params.id, req.params.user_name)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(500).json({ message: "something went wrong adding the group member", err })
        })
})

module.exports = router
