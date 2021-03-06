const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    try {
        const token = req.headers.token
        req.user = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        throw {
            status: 401,
            msg: 'Invalid Token'
        }
    }
}

module.exports = authentication