/***
 *  Author: Victor Smolinski
 *  Date:   12/20/2020
 *  Description: 
 *      Abstract interface class, not to be instantiated 
 *      but instead to be extended by specific interfaces.
 *  Properties:
 *      reflection -> a map of key,value pairs storing a method name (key), 
 *      and a map (value) of arguments with their corresponding argument type.
 *  */

class Interface {
    constructor(obj) {
        this.obj = obj;
        // TODO method names and their argument list - later refine with optional arg allowance
        this.reflection = new Map();
    }

    // reflection map, gets populated by each method
    get getReflection() { return this.reflection; }
    set addReflection(pair) {
        if (typeof pair[o] === 'string') {
            this.reflection[pair[0]] = pair[1];
        } else {
            // TODO run a stacktrace as well as an error msg
            throw new Error('error, method name is not a string...!')
        }
    }

    verify = (obj) => {
        return () => {
            if (obj === null || obj === undefined) {
                throw new Error('error, interface object does not exist, or it is null...!')
            } else {
                let props = Object.values(obj);
                props.forEach(element => {
                    console.log("prop: " + element);
                    console.log("constructor: " + element.constructor);
                    console.log("type: " + typeof element);
                });
            }
        }
    }
}

module.exports = Interface;