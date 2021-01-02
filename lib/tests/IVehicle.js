"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Abstract interface class, not to be instantiated 
 *      but instead to be extended by specific interfaces.
 *  Properties:
 *      - 
 *  Methods:
 *      - public - start (boolean) {void} M:
 *      - public - start () {void} M:
 *  */
//TODO make this class a singleton
const Interface = require("../objectifiers/Interface");

let IVehicle = /*#__PURE__*/function (_Interface) {
  _inherits(IVehicle, _Interface);

  var _super = _createSuper(IVehicle);

  function IVehicle() {
    var _this;

    _classCallCheck(this, IVehicle);

    _this = _super.call(this);

    _this.start = function (isReadyToRun) {
      return [false];
    };

    _this.stop = function () {
      return [null];
    };

    return _this;
  }

  return IVehicle;
}(Interface);

module.exports = IVehicle;