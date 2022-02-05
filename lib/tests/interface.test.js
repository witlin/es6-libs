"use strict";

var _Suv = _interopRequireDefault(require("./Suv.js"));

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
    const badCar = new _BadCar.default('Chevy', 'Tahoe', '2021', 'Silver');
    const props = Object.values(badCar);
    const objSize = Object.keys(badCar).length;
    let expectedProps = new Array(objSize);
    expectedProps.fill(null);
    expect(props).toEqual(expectedProps);
  });
});
describe("Child classes always inherit their parent's interfaces", function () {
  it("Child classes should override base class implementation if needed", function () {
    const suv = new _Suv.default('Nissan', 'Pathfinder', 2019, 'Blue');
    expect(suv.start(true)).toBe('Suv is running...');
  });
});
describe("Child classes should pass interface validation even if they don't\n    define interface methods themselves", function () {
  it("Child classes should be able to use their base class interface methods\n            to comply with the interface", function () {
    const suv = new _Suv.default('Nissan', 'Pathfinder', 2019, 'Blue');
    expect(suv.stop()).toBe('car stopped...');
  });
});