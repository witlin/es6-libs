const IVehicle = require('./IVehicle');
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.interfaces = new Map();
        this.start = (ready2run) => {
            if (ready2run) {
                console.log("running...");
            } else { console.log("wasn't ready to run..."); }
        };

        /*** 
         * Comment or uncomment this section to test by hand
        */

        this.stop = () => {
            if (ready2run) {
                console.log("running...");
            } else { console.log("wasn't ready to run..."); }
        };

        ////////////////// - INTERFACE LOGIC - //////////////////
        let ifc = this.interfaces;
        ifc['ivehicle'] = new IVehicle();
        ifc.ivehicle.verify(this);
    }
}

////////////////////// - STACK CALL - ///////////////////////////
var mySuv = new Car('Chevy', 'Tahoe', '2021', 'black');
