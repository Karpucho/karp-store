/* eslint-disable no-underscore-dangle */
import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодосы' },
      { id: 2, name: 'Трубки' },
    ];

    this._brands = [
      { id: 1, name: 'Sams' },
      { id: 2, name: 'Apple' },
    ];

    this._devices = [
      {
        id: 1, name: 'asd asd', price: 234, rating: 3, img: 'http://klublady.ru/uploads/posts/2022-02/1644629733_43-klublady-ru-p-klubnika-v-chashke-foto-47.jpg',
      },
      {
        id: 2, name: 'аывава', price: 2343, rating: 2, img: 'http://klublady.ru/uploads/posts/2022-02/1644629733_43-klublady-ru-p-klubnika-v-chashke-foto-47.jpg',
      },
      {
        id: 3, name: 'yutyuytu', price: 235674, rating: 5, img: 'http://klublady.ru/uploads/posts/2022-02/1644629733_43-klublady-ru-p-klubnika-v-chashke-foto-47.jpg',
      },
      {
        id: 4, name: 'bnmvnfg', price: 678234, rating: 4, img: 'http://klublady.ru/uploads/posts/2022-02/1644629733_43-klublady-ru-p-klubnika-v-chashke-foto-47.jpg',
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
