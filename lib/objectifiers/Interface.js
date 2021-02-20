"use strict";

require("core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Abstract interface class, not to be instantiated 
 *      but instead to be extended by specific interfaces.
 *  Properties:
 *      - private - reflection {array} P:
 *  Methods:
 *      - public - verify (Object) {void} M:
 *  */
//TODO make reflection a private field
let Interface = function Interface() {
  var _this = this;

  _classCallCheck(this, Interface);

  _defineProperty(this, "verify", function (obj) {
    _this.reflection = Reflect.ownKeys(_this).filter(function (item) {
      return item.toString() != 'verify';
    }).filter(function (item) {
      return item.toString() != 'reflection';
    });
    let orfl = Reflect.ownKeys(obj);

    if (orfl === null || orfl === undefined) {
      obj = null;
      throw new Error("Interface implementation failed arg object passed is null or undefined...!");
    } else {
      try {
        let checkedMethods = [];

        _this.reflection.forEach(function (element) {
          let match = orfl.find(function (item) {
            return item.toString() == element.toString();
          });
          checkedMethods.push(match);
        });

        if (checkedMethods.toString() == _this.reflection.toString()) {
          return;
        } else {
          Object.keys(obj).forEach(function (prop) {
            console.log(prop);
            obj[prop] = null;
          });
          throw new Error("".concat(_this.toString(), " Implementation is not valid...!\n                        Interface method list: [").concat(_this.reflection, "] \n                            != \n                        Implementation method list: [").concat(checkedMethods, "]"));
        }
      } catch (err) {
        console.error(err.toString());
      }
    }
  });

  // TODO method names and their argument list - later refine with optional arg allowance
  this.reflection;

  this.toString = function () {
    return '[Object:Interface]';
  };
};

var _default = Interface;
exports.default = _default;