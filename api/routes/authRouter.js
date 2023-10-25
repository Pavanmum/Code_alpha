const express = require('express');
const { login, sign, logout } = require('../controller/userCtrl');

const router = express.Router();

router.post("/sign", sign)
router.post("/login", login)
router.post("/logout",logout)

module.exports = router