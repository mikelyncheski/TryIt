"use strict";

// JavaScript has typed values, not typed variables.
// string
// number
// boolean
// null and undefined
// object
// symbol (new to ES6)

var a;
typeof a;               // "undefined"

a = "hello world";
console.log(typeof a);               // "string"

a = 42;
console.log(typeof a);               // "number"

a = true;
console.log(typeof a);               // "boolean"

a = null;
console.log(typeof a);               // "object" -- weird, bug

a = undefined;
console.log(typeof a);               // "undefined"

a = { b: "c" };
console.log(typeof a);               // "object"

console.log(typeof(typeof a));       // "string"

a = null;
console.log(typeof a);               // "object" -- typeof null is an interesting case, because it errantly returns "object", when you'd expect it to return "null".  JS bug now and forever


// Objects
// The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type.
//This is perhaps one of the most useful value types in all of JavaScript.

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

obj.a;      // "hello world"
obj.b;      // 42
obj.c;      // true

obj["a"];   // "hello world"    -- CAN ACCESS EITHER WAY
obj["b"];   // 42
obj["c"];   // true

console.log(obj);


// Arrays
// An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions. For example:

var arr = [
    "hello world",
    42,
    true
];

arr[0];         // "hello world"
arr[1];         // 42
arr[2];         // true
arr.length;     // 3

console.log(typeof arr);     // "object"   -- http://stackoverflow.com/a/15843896/33787 - Why typeof does not requires parens?  Because it is an operator.


// Functions
// The other object subtype you'll use all over your JS programs is a function:

function foo() {
    return 42;
}

foo.bar = "hello world";

typeof foo;         // "function"
typeof foo();       // "number"
typeof foo.bar;     // "string"
console.log(foo.xxx);   // "undefined"



// Built-In Type Methods

var a = "hello world";
var b = 3.14159;

a.length;               // 11
a.toUpperCase();        // "HELLO WORLD"
b.toFixed(4);           // "3.1416"


// Coercion
a = "42";
b = Number(a);
console.log(a, typeof a);             // "42"
console.log(b, typeof b);             // 42

a = "42x";
b = Number(a);
console.log(a, typeof a);             // "42x
console.log(b, typeof b);             // Nan, number


// Falsy
// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false
//
// It's important to remember that a non-boolean value only follows this "truthy"/"falsy" coercion if it's actually coerced to a boolean. 
// It's not all that difficult to confuse yourself with a situation that seems like it's coercing a value to a boolean when it's not.

var x = NaN;
if (x) console.log("truthy"); else console.log("Falsy");


// Equality
// The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without 
// allowing coercion; === is often called "strict equality" for this reason.

// Functions As Values

var foo = function() {   // Anonymous function
    // ..
};

var x = function bar(){
    // ..
};


// Immediately Invoked Function Expressions (IIFEs)
// Because an IIFE is just a function, and functions create variable scope, using an IIFE in this fashion is often used to declare variables 
// that won't affect the surrounding code outside the IIFE.

(function IIFE(){
    console.log( "Hello!" );
})();
// "Hello!"


// Closure
// You can think of closure as a way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.

function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };

    return add;
}
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

console.log(plusOne( 3 ));       // 4  <-- 1 + 3
console.log(plusOne( 41) );      // 42 <-- 1 + 41
console.log(plusTen( 13));      // 23 <-- 10 + 13