const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.headers.user_access_token;
    if (token) {
        try {
            const { user_id } = jwt.verify(token, "key")
            req.users = user_id;
        } catch (err) {
            return res.status(403).json({ message: "Invalid token", err })
        }
    } else {
        return res.status(403).json({ message: "Auth token needed" })
    }

    return next();
}

module.exports = auth;