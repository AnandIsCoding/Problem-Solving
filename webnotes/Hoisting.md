<small>


### JavaScript Variable Hoisting
**Hoisting**
Memory Allocation Phase:
var and let → They are hoisted and assigned undefined initially.

const → It is hoisted but not initialized.

Key Difference:
If you try to access a var or let variable before initialization, var will give undefined, while let will give a ReferenceError due to the Temporal Dead Zone (TDZ).

If you try to access a const variable before initialization, it also results in a ReferenceError because it is in the TDZ and is not assigned any value automatically.

### Temporal Dead Zone (TDZ) in JavaScript

- TDZ is the period between the start of execution and the point where a `let` or `const` variable is declared.
- Accessing a variable in TDZ results in a `ReferenceError`.
- `var` does not have a TDZ since it gets hoisted with `undefined`, but `let` and `const` do.
- TDZ exists because `let` and `const` are not initialized at the time of hoisting.
- Example:  
  ```js
  console.log(x); // ReferenceError cannot access 1 before initialization
  let x = 10;

## Types of Error

- **ReferenceError**: Occurs when trying to access a variable that is not defined or is in the Temporal Dead Zone (TDZ).  
- **TypeError**: Happens when an operation is performed on a value of an incompatible type (e.g., calling a non-function as a function).  
- **SyntaxError**: Raised when the JavaScript engine encounters code that violates the language’s syntax rules.  

### Function Hoisting Behavior

| Function Type                 | Hoisted?               | Usable Before Declaration? |
|--------------------------------|------------------------|----------------------------|
| **Function Declaration**       | ✅ Yes                 | ✅ Yes                      |
| **Function Expression**        | ✅ (Variable Only)     | ❌ No                       |
| **Arrow Function**             | ✅ (Variable Only)     | ❌ No                       |
| **Named Function Expression**  | ✅ (Variable Only)     | ❌ No                       |

### Explanation
1. **Function Declarations**: Fully hoisted, meaning they can be called before their definition.
2. **Function Expressions**: The variable gets hoisted, but the function itself does not.
3. **Arrow Functions**: Behave like function expressions, not hoisted.
4. **Named Function Expressions**: Similar to function expressions, not hoisted.

### Example
#### ✅ Function Declaration (Works Before Declaration)
```js
sayHello(); // Works due to hoisting
function sayHello() {
    console.log("Hello, World!");
}
```

#### ❌ Function Expression (Error Before Declaration)
```js
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};
```

#### ❌ Arrow Function (Error Before Declaration)
```js
arrowFunc(); // TypeError: arrowFunc is not a function
var arrowFunc = () => console.log("Hello!");
```




</small>