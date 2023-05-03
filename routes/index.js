const { Router } = require('express');
const controllers = require('../controllers');
const userAuth = require('../middleware/userAuth')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', userAuth.saveUser, controllers.createUser);
router.get('/users',  userAuth.validateToken, controllers.getAllUsers);
//login route
router.post('/login', controllers.login )

module.exports = router;

