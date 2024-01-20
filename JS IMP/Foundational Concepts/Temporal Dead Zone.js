/*

let , const and var - temporal Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period between entering scope (lexical scope) and the actual variable declaration. During this temporal dead zone, if you try to access the variable, it will result in a ReferenceError.

This concept is specifically related to let and const declarations. Unlike var, which is hoisted and initialized with undefined at the beginning of its scope, let and const remain uninitialized until the actual declaration statement is encountered during runtime.

*/

console.log(x); // undefined (no ReferenceError)
var x = 5; // var is hoisted and initialized to undefined

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; // let has a Temporal Dead Zone, accessing it before declaration results in an error

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15; // const also has a Temporal Dead Zone

/*

1. Hoisting: 

   - All variable declarations (both `var`, `let`, and `const`) are hoisted during the creation phase.
   - For `var`, hoisting includes both the declaration and initialization, and the variable is initialized with `undefined`.

2. Temporal Dead Zone (TDZ):

   - The Temporal Dead Zone is a period in which accessing a variable before its declaration results in a `ReferenceError`.
   - `let` and `const` remain uninitialized during the Temporal Dead Zone, causing the error.

3. `var` Initialization Throughout Scope:

   - Unlike `let` and `const`, `var` is initialized with `undefined` throughout the entire scope during hoisting.
   - This initialization avoids the Temporal Dead Zone, allowing `var` variables to be accessed before their actual declaration.

 */


/*
 
Errors 

1) SyntaxError : relates to issues with the structure of your code.
2) ReferenceError : occurs when trying to use an undeclared or inaccessible variable.
3) TypeError : happens when there is a problem with the data types involved in an operation
4) RangeError : This error happens when the provided value is not valid for the particular operation,
 often involving numeric values and their allowable ranges.

*/

