
const Interface = require("../objectifiers/Interface");
class IVehicle extends Interface {
    start = (isReadyToRun) => {
        return false;
    }
    stop = () => {
        return null
    }
}

let vehicle = new IVehicle();
console.log(vehicle);
vehicle.addReflection([vehicle.start.name, vehicle.start.arguments[0]]);
vehicle.addReflection([vehicle.stop.name, vehicle.stop.arguments[1]]);
vehicle.verify(vehicle);