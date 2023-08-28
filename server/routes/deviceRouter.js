const Router = require('express');

const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

const router = new Router();

router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.post('/', checkRoleMiddleware, deviceController.create);
router.delete('/:id', checkRoleMiddleware, deviceController.delete);

module.exports = router;
