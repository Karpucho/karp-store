const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res, next) {
    const { name } = req.body;

    if (name) {
      const brand = await Brand.create({ name });
      return res.json(brand);
    }

    return next(ApiError.badRequest('Отсутствует часть необходимых данных'));
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
