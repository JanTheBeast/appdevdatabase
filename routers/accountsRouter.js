const express = require("express")
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const accountsDB = require("../data/helpers/accountModel")
const groupDB = require("../data/helpers/groupModel")

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

router.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(500).json({ message: "Empty field found", err })
        }

        const hash_password = await bcryptjs.hash(password, 12);
        let users;

        users = await accountsDB.insert({
            name: name, email: email, password: hash_password
        })

        publicGroup = await groupDB.addMember(1, users.id);

        const user_id = { user_id: users };
        const token = jwt.sign(user_id, "key");

        if (!users) {
            return res.status(500).json({ message: "something went wrong creating your account", err })
        }

        const id = users.id
        return res.status(200).json({ token, id })

    } catch (err) {
        return res.status(500).json({ message: "something went wrong creating your account", err })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(500).json({ message: "Empty field found" })
        }

        const users = await accountsDB.getByName(name).first();
        if (!users) {
            return res.status(500).json({ message: "Invalid name" })
        }

        const compare_password = await bcryptjs.compare(password, users.password);
        if (compare_password) {
            const user_id = { user_id: users.id };
            const token = jwt.sign(user_id, "key");
            const id = users.id
            return res.status(200).json({ token, id })
        } else {
            return res.status(500).json({ message: "Invalid name and password", err })
        }

    } catch (err) {
        return res.status(500).json({ message: "something went wrong logging in your account", err })
    }
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

router.get("/:id/groups", auth, (req, res) => {
    accountsDB.getGroups(req.params.id)
      .then(groups => {
        res.status(200).json(groups)
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong getting group members", err })
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
