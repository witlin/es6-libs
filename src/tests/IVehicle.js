/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Real Definition of the Vehicle application programming interface.
 *      It extends the abstract definition of what an interface is (Interface.js).
 *  Properties:
 *      - 
 *  Methods:
 *      - public - start (boolean) {void} M:
 *      - public - start () {void} M:
 *  */

//TODO make this class a singleton

import Interface from "../objectifiers/Interface.js";
class IVehicle extends Interface {
    constructor() {
        super();
        this.start = (isReadyToRun) => { }
        this.stop = () => { }
    }
}

export default IVehicle;