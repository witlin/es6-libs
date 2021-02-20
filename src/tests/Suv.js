/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
***/

import Car from './Car.js';

class GoodSuv extends Car {
    constructor(make, model, year, color) {
        super(make, model, year, color);

        /*** 
         * Comment or uncomment either method to test by hand
        */

        this.start = (ready2run) => {
            if (ready2run) {
                console.log("Suv is running...");
            } else { console.log("Suv wasn't ready to run..."); }
        };

        this.stop = () => {
            console.log("Suv stopped...");
        };

        this.toString = () => '[Car:GoodSuv]';
        // verify all the interfaces declared above before returning a new instance of the class
        for (const int of this.getInterfaces()) {
            int[1].verify(this);
        }
    }
}

export default GoodSuv;