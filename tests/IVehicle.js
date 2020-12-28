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

const Interface = require("../objectifiers/Interface");
class IVehicle extends Interface {
    constructor() {
        super();
        this.start = (isReadyToRun) => {
            return [false];
        }
        this.stop = () => {
            return [null]
        }
    }
}

module.exports = IVehicle;