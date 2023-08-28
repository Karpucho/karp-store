const Router = require('express');

const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

const router = new Router();

router.get('/', brandController.getAll);
router.post('/', checkRoleMiddleware, brandController.create);

module.exports = router;
