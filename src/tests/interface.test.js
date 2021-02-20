import BadCar from './BadCar.js';
import Car from './Car.js';

describe("A good Car implementation of IVehicle should", () => {
    it("implement all methods specified in the IVehicle interface definition",
        () => {
            const goodCar = new Car('Chevy', 'Tahoe', '2021', 'Silver');
            expect(goodCar.getInterfaces().get('ivehicle').reflection)
                .toEqual(["toString", "start", "stop"]);
        })
});

describe("A bad Car implementation of the IVehicle interface will", () => {
    it("NOT implement all methods specified in the interface definition",
        () => {
            expect(new BadCar('Chevy', 'Tahoe', '2021', 'Silver'))
                .toEqual({
                    "getColor": null,
                    "getInterfaces": null,
                    "getMake": null,
                    "getModel": null,
                    "getYear": null,
                    "setColor": null,
                    "start": null,
                    "toString": null
                });
        })
});