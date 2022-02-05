"use strict";

require("core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Car2 = _interopRequireDefault(require("./Car.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

let Suv = /*#__PURE__*/function (_Car) {
  _inherits(Suv, _Car);

  var _super = _createSuper(Suv);

  function Suv(make, model, year, color) {
    var _this;

    _classCallCheck(this, Suv);

    _this = _super.call(this, make, model, year, color);
    /*** 
     * Comment or uncomment either method to test by hand
     */

    _this.start = function (ready2run) {
      let result = "";

      if (ready2run) {
        result = "Suv is running...";
      } else {
        r;
        esult = "Suv wasn't ready to run...";
      }

      return result;
    }; // this.stop = () => {
    //     return "Suv stopped...";
    // };


    _this.toString = function () {
      return '[Car:GoodSuv]';
    }; // verify all the interfaces declared above 
    // before returning a new instance of the class


    const ivehicle = _this.getInterfaces().get('ivehicle');

    ivehicle.verify(_assertThisInitialized(_this));
    return _this;
  }

  return Suv;
}(_Car2.default); // const mySuv = new Suv('Chevy', 'Tahoe', 2021, 'Silver');
// console.log(mySuv.stop());


var _default = Suv;
exports.default = _default;