"use strict";

var _BadCar = _interopRequireDefault(require("./BadCar.js"));

var _Car = _interopRequireDefault(require("./Car.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("A good Car implementation of IVehicle should", function () {
  it("implement all methods specified in the IVehicle interface definition", function () {
    const goodCar = new _Car.default('Chevy', 'Tahoe', '2021', 'Silver');
    expect(goodCar.getInterfaces().get('ivehicle').reflection).toEqual(["toString", "start", "stop"]);
  });
});
describe("A bad Car implementation of the IVehicle interface will", function () {
  it("NOT implement all methods specified in the interface definition", function () {
    expect(new _BadCar.default('Chevy', 'Tahoe', '2021', 'Silver')).toEqual({
      "getColor": null,
      "getInterfaces": null,
      "getMake": null,
      "getModel": null,
      "getYear": null,
      "setColor": null,
      "start": null,
      "toString": null
    });
  });
});