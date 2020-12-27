/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Abstract interface class, not to be instantiated 
 *      but instead to be extended by specific interfaces.
 *  Properties:
 *      - reflection:
 *  Methods:
 *      - verify:
 *  */

class Interface {
    constructor() {
        // TODO method names and their argument list - later refine with optional arg allowance
        this.reflection;
    }
    verify = (obj) => {
        this.reflection = (Reflect.ownKeys(this))
            .filter(item => item.toString() != 'verify');
        let orfl = Reflect.ownKeys(obj);
        if (orfl === null || orfl === undefined) {
            throw new Error(`Interface implementation of ${this} 
                                failed arg object passed is null or undefined...!`);
        } else {
            try {
                let checkedMethods = [];
                this.reflection.forEach(element => {
                    let match = orfl.find(item => item.toString() == element.toString());
                    checkedMethods.push(match);
                });
                if (checkedMethods.toString() ==
                    this.reflection.toString()) {
                    return;
                } else {
                    throw new Error(`Interface Implementation of ${this}, ${obj}, is not valid...!`);
                }
            } catch (err) {
                console.error(err.toString());
            }
        }
    }
}
module.exports = Interface;