/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  */

import IVehicle from './IVehicle.js';
class Car {
    constructor(make, model, year, color) {

        //private variables (closures)
        let _make = make;
        let _model = model;
        let _year = year;
        let _color = color;
        let _interfaces = new Map();

        //declare the interfaces to be implemented by this class into a map object
        _interfaces.set('ivehicle', new IVehicle());

        //getter methods
        this.getMake = () => { return _make; };
        this.getModel = () => { return _model; };
        this.getYear = () => { return _year; };
        this.getColor = () => { return _color; };
        //maps are passed by reference, create a copy of the original map to keep the object private
        this.getInterfaces = () => {
            let copy = new Map();
            copy = _interfaces;
            return copy;
        };

        //setters
        this.setColor = (c) => {
            _color = c;
            return this;
        }

        /*** 
         * Comment or uncomment either method to test by hand
        */

        this.start = (ready2run) => {
            if (ready2run) {
                console.log("running...");
            } else { console.log("wasn't ready to run..."); }
        };

        //Missing the stop() method, should not pass interface test...!

        this.toString = () => '[Object:Car]';

        // verify all the interfaces declared above before returning a new instance of the class
        for (const int of this.getInterfaces()) {
            int[1].verify(this);
        }
    }
}

export default Car;