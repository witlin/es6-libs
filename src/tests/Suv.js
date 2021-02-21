/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 ***/

import Car from './Car.js';

class Suv extends Car {
    constructor(make, model, year, color) {
        super(make, model, year, color);

        /*** 
         * Comment or uncomment either method to test by hand
         */

        this.start = (ready2run) => {
            let result = "";
            if (ready2run) {
                result = "Suv is running...";
            } else {
                r
                esult = "Suv wasn't ready to run...";
            }
            return result;
        };

        // this.stop = () => {
        //     return "Suv stopped...";
        // };

        this.toString = () => '[Car:GoodSuv]';
        // verify all the interfaces declared above 
        // before returning a new instance of the class
        const ivehicle = this.getInterfaces().get('ivehicle')
        ivehicle.verify(this);
    }
}

// const mySuv = new Suv('Chevy', 'Tahoe', 2021, 'Silver');
// console.log(mySuv.stop());

export default Suv;