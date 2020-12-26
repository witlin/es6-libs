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

const exception = require('error');

class interface {
    constructor(obj) {
        this.obj = obj;
        // TODO method names and their argument list - later refine with optional arg allowance
        this.reflection = new Map();
    }

    // reflection map, gets populated by each method
    get reflection() { return this.reflection; }
    set reflection(key, value) {
        if (typeof key === 'string') {
            this.reflection[key] = value;
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
                //TODO
            }
        }
    }
}