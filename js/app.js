import * as math from "./math";

console.log("Application started");

//Testing ES6 features

//Imported module
console.log("1 + 1 = " + math.add(1,1));
console.log("1 - 1 = " + math.substract(1,1));
console.log("1 - undefined = " + math.substract(1));

//Arrow Functions (this should not work in Safari 9 unless transpiler works)
var arrow = () => console.log("It works! ");
arrow();

//Classes
class Hello {
    constructor(name = "World") {
        this.name = name;
    }

    sayHello() {
        console.log("Hello " + this.name);
    }
}

var hello = new Hello();
hello.sayHello();
var hello2 = new Hello("Joel");
hello2.sayHello();

//Promises
var delay = ms => new Promise((res, rej) => setTimeout(res, ms));

delay(5000).then(()=>console.log("Delayed response will be displayed at the end"));

//Chained promises
delay(1000).then(function() {
    console.log("Delayed 1s");
    return delay(1000);
}).then(function() {
    console.log("Delayed another second");
    throw new Error("Err");
    return delay(1000);
}).then(function() {
    console.log("Final delay should never be reached");
}).catch(function() {
    console.log("There was an error in the chain");
});