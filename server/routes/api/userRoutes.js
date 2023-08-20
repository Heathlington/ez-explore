const router = require('express').Router();
const {
    createUser,
    login,
    logOut
} = require('../../controllers/userController')

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser) //.put(authMiddleware)

router.route('/login').post(login).put(authMiddleware)

router.route('logout').post(logOut)

module.exports = router;