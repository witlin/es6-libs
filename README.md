# es6-libs

A collection of APIs and reusable coding patterns for large complex architectures using ES6.

## Interface

The `Interface` Abstract Class is not meant to be instantiated, but to provide an automated check of the objects claiming to implement an interface, and the intstantiated `Interface` object which actually represents it.
In order to implement this Interface pseudo-pattern, the abstract class must be available for any Interface object to put it on its path and inherit from it.

```javascript
import Interface from "../objectifiers/Interface.js";
```

Each Definition of an API's interface must be declared as a class. The class mus provide abstract method signatures with their arguments. These instances of the `Interface` abstract class inherit the verify method and the private reflection property, and use them to verify other classes alledged implementation of the interface's methods. Improvements would include two more features, verifying **arguments and return type**.

```javascript
class IVehicle extends Interface {
  constructor() {
    super();
    this.start = (isReadyToRun) => {};
    this.stop = () => {};
  }
}
```

![  interface class uml diagram image](./assets/imgs/interface-uml.png)

### Sample

A class attempting to implement an interface should have an instance of that interface's class declaration added to its map of interface implementation. The interfaces map is made up of name value pairs where the name is the string name of the interface's class declaration, and the value is an instance of said interface class.

```javascript
// interface class
import IVehicle from './IVehicle.js';

// class implementing the interface
class Car {
    constructor(make, model, year, color) {
     let _interfaces = new Map();
     _interfaces.set('ivehicle', new IVehicle());
        this.getInterfaces = () => {
            let cachedInterfaceList = new Map();
            cachedInterfaceList = _interfaces;
            return cachedInterfaceList;
        };
    for (const int of this.getInterfaces()) {
        int[1].verify(this);
    }
}
```

![GitHub](https://img.shields.io/github/license/witlin/es6-libs)
![GitHub repo size](https://img.shields.io/github/repo-size/witlin/es6-libs)
![GitHub package.json version](https://img.shields.io/github/package-json/v/witlin/es6-libs)
