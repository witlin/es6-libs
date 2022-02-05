"use strict";

var _Car = _interopRequireDefault(require("./Car.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Car", function () {
  describe("getColor", function () {
    it("should return the car's color", function () {
      const color = 'black';
      const car = new _Car.default('Chevy', 'Tahoe', '2021', 'black');
      expect(car.getColor()).toEqual(color);
    });
  });
  describe("setColor", function () {
    it("shoud return the updated car color", function () {
      const color = 'red';
      const car = new _Car.default('Chevy', 'Tahoe', '2021', 'black');
      expect(car.setColor('red').getColor()).toEqual('red');
    });
  });
}); // ...