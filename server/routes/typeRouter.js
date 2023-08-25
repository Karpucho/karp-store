const Router = require('express');

const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

const router = new Router();

router.get('/', typeController.getAll);
router.post('/', checkRoleMiddleware, typeController.create);

module.exports = router;
