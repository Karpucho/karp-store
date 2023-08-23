const uuid = require('uuid');
const path = require('path');

const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      let {
        name, price, rating, info, typeId, brandId,
      } = req.body;
      const { img } = req.files;

      const fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name, price, rating, typeId, brandId, img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((element) => DeviceInfo.create({
          title: element.title,
          description: element.description,
          deviceId: device.id,
        }));
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let {
      typeId, brandId, page, limit,
    } = req.query;

    let devices;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;

    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });

    return res.json(device);
  }
}

module.exports = new DeviceController();
