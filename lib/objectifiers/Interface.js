"use strict";

require("core-js/modules/es.regexp.to-string.js");

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
    });
    let orfl = Reflect.ownKeys(obj);

    if (orfl === null || orfl === undefined) {
      throw new Error("Interface implementation of ".concat(_this, " \n                                failed arg object passed is null or undefined...!"));
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
          throw new Error("Interface Implementation of ".concat(_this, ", ").concat(obj, ", is not valid...!"));
        }
      } catch (err) {
        console.error(err.toString());
      }
    }
  });

  // TODO method names and their argument list - later refine with optional arg allowance
  this.reflection;
};

module.exports = Interface;