"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO make fields private, implement the Property API when it's developed.
const IVehicle = require('./IVehicle');

let Car = function Car(make, model, year, color) {
  _classCallCheck(this, Car);

  // this.make = make;
  // this.model = model;
  // this.year = year;
  // this.color = color;
  // this.interfaces = new Map();
  let _make = make;
  let _model = model;
  let _year = year;
  let _color = color;

  let _interfaces = new Map();

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
    return _interfaces;
  }; //TODO Make the setters...

  /*** 
   * Comment or uncomment either method to test by hand
  */


  this.start = function (ready2run) {
    if (ready2run) {
      console.log("running...");
    } else {
      console.log("wasn't ready to run...");
    }
  };

  this.stop = function () {
    console.log("car stopped...");
  }; ////////////////// - INTERFACE LOGIC - //////////////////


  let ifc = this.getInterfaces();
  ifc['ivehicle'] = new IVehicle();
  ifc.ivehicle.verify(this);
}; ////////////////////// - STACK CALL - ///////////////////////////


var mySuv = new Car('Chevy', 'Tahoe', '2021', 'black');
console.log(mySuv.getMake());
console.log(mySuv.getInterfaces());
console.log("interfaces? " + mySuv._interfaces);