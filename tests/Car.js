//TODO make fields private, implement the Property API when it's developed.

const IVehicle = require('./IVehicle');
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.interfaces = new Map();

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
        let ifc = this.interfaces;
        ifc['ivehicle'] = new IVehicle();
        ifc.ivehicle.verify(this);
    }
}

////////////////////// - STACK CALL - ///////////////////////////
var mySuv = new Car('Chevy', 'Tahoe', '2021', 'black');
