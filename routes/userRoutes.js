const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.createUser);

module.exports = router;