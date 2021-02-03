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

//TODO make reflection a private field

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
            obj = null;
            throw new Error(`Interface implementation failed arg object passed is null or undefined...!`);
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
                    Object.keys(obj).forEach((prop) => {
                        console.log(prop);
                        obj[prop] = null;
                    });
                    throw new Error(`Interface Implementation is not valid...!
                        Interface method list: [${this.reflection}] 
                            != 
                        Implementation method list: [${checkedMethods}]`);

                }
            } catch (err) {
                console.error(err.toString());
            }
        }
    }
}
module.exports = Interface;