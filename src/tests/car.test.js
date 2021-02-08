import Car from './Car.js';

describe("Car", () => {
    describe("getColor", () => {
        it("should return the car's color", () => {
            const color = 'black';
            const car = new Car('Chevy', 'Tahoe', '2021', 'black');
            expect(car.getColor()).toEqual(color);
        })
    });

    describe("setColor", () => {
        it("shoud return the updated car color", () => {
            const color = 'red';
            const car = new Car('Chevy', 'Tahoe', '2021', 'black');
            expect(car.setColor('red')
                .getColor()).toEqual('red');
        })
    });
});