import Suv from './Suv.js';
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
            const badCar = new BadCar('Chevy', 'Tahoe', '2021', 'Silver');
            const props = Object.values(badCar);
            const objSize = (Object.keys(badCar)).length;
            let expectedProps = new Array(objSize);
            expectedProps.fill(null);
            expect(props).toEqual(expectedProps);
        })
});

describe("Child classes always inherit their parent's interfaces",
    () => {
        it("Child classes should override base class implementation if needed",
            () => {
                const suv = new Suv('Nissan', 'Pathfinder', 2019, 'Blue');
                expect(suv.start(true)).toBe('Suv is running...');
            })
    });

describe(`Child classes should pass interface validation even if they don't
    define interface methods themselves`,
    () => {
        it(`Child classes should be able to use their base class interface methods
            to comply with the interface`, () => {
            const suv = new Suv('Nissan', 'Pathfinder', 2019, 'Blue');
            expect(suv.stop()).toBe('car stopped...');
        })
    });