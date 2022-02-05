"use strict";

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IVehicle = _interopRequireDefault(require("./IVehicle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Car = function Car(make, model, year, color) {
  var _this = this;

  _classCallCheck(this, Car);

  //private variables (closures)
  let _make = make;
  let _model = model;
  let _year = year;
  let _color = color;

  let _interfaces = new Map(); //declare the interfaces to be implemented by this class into a map object


  _interfaces.set('ivehicle', new _IVehicle.default()); //getter methods


  this.getMake = function () {
    return _make;
  };

  this.getModel = function () {
    return _model;
  };

  this.getYear = function () {
    return _year;
  };

  this.getColor = function () {
    return _color;
  };

  this.getInterfaces = function () {
    let cachedInterfaceList = new Map();
    cachedInterfaceList = _interfaces;
    return cachedInterfaceList;
  }; //setters


  this.setColor = function (c) {
    _color = c;
    return _this;
  };
  /*** 
   * Comment or uncomment either method to test by hand
   */


  this.start = function (ready2run) {
    let result;

    if (ready2run) {
      result = "car running...";
    } else {
      result = "car wasn't ready to run...";
    }

    return result;
  };

  this.stop = function () {
    return "car stopped...";
  };

  this.toString = function () {
    return '[Object:Car]';
  }; // verify all the interfaces declared above before returning a new instance of the class


  for (const int of this.getInterfaces()) {
    int[1].verify(this);
  }
};

var _default = Car;
exports.default = _default;