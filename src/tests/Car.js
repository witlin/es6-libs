/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Mockup class of a Car, implementing the IVehicle interface.
 *  Properties:
 *      - make
 *      - model
 *      - year
 *      - color
 *      - interfaces
 *  Methods:
 *      - public - getMake () {void} M:
 *      - public - getModel () {void} M:
 *      - public - getYear () {void} M:
 *      - public - getColor () {void} M:
 *      - public - getInterfaces() {void} M:
 * 
 *      TODO - need to add 
 *  */

const IVehicle = require('./IVehicle');
class Car {
    constructor(make, model, year, color, a) {

        let _make = make;
        let _model = model;
        let _year = year;
        let _color = color;
        let _interfaces = new Map();

        this.getMake = () => { return _make; };
        this.getModel = () => { return _model; };
        this.getYear = () => { return _year; };
        this.getColor = () => { return _color; };
        this.getInterfaces = () => { return _interfaces; };

        //TODO Make the setters...

        /*** 
         * Comment or uncomment either method to test by hand
        */

        this.start = (ready2run) => {
            if (ready2run) {
                console.log("running...");
            } else { console.log("wasn't ready to run..."); }
        };

        this.stop = () => {
            console.log("car stopped...");
        };

        ////////////////// - INTERFACE LOGIC - //////////////////
        let ifc = this.getInterfaces();
        ifc['ivehicle'] = new IVehicle();
        ifc.ivehicle.verify(this);
    }
}

////////////////////// - TEST CALL - ///////////////////////////
var mySuv = new Car('Chevy', 'Tahoe', '2021', 'black');
console.log(mySuv.getMake());
console.log(mySuv.getInterfaces());