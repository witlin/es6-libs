
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