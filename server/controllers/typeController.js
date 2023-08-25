const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res, next) {
    const { name } = req.body;

    if (name) {
      const type = await Type.create({ name });
      return res.json(type);
    }

    return next(ApiError.badRequest('Отсутствует часть необходимых данных'));
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
