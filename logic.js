function functionDeclaration() {
  // Function Declaration. Can be called earlier it is defined
  function sum(a, b) {
    return a + b;
  }

  // Function Expression. Is created when the execution reaches
  let sum = function(a, b) {
    return a + b;
  };

  //Shorter version
  let sum = (a, b) => a + b;

}

function functions() {
  //parameters are passed by value
  function doSomething (paramA, paramB = 'default value') {
    return value;
  }
  //Is the same as
  let doSomething = function(paramA, paramB = 'default value') {
    return value;
  }
  
  function doSomething (paramA, paramB = anotherFunction()) {

  }
  //This returns undefined because return is missing.

}

function loops(){
  while (condition) {
    // do something
    continue; //optional, goes to next iteration
    break; //optional
  }

  do {
    // something
  } while (condition);

  forLabel: for (let i = 0; condition; i++) {

    for (let j = 0; condition; j++) {
      //do something
      if (condition) break forLabel; // (*)
      // do something else
      continue; //optional, goes to next iteration
      // do more stuff
    }
  }

}

function logicalOperators(){
  //OR “||” finds the first truthy value
  console.log( 1 || 0 ); // 1 (1 is truthy)
  console.log( true || 'no matter what' ); // (true is truthy)

  console.log( null || 1 ); // 1 (1 is the first truthy value)
  console.log( null || 0 || 1 ); // 1 (the first truthy value)
  console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
  console.log(null || undefined || 'something'); //'something'

  //AND “&&” finds the first falsy value
  //can replace an if statement, as OR
  ( 10 > 5) && console.log('10 is greater than 5');
  
  //! (NOT), Converts the operand to boolean type: true/false.
  //return the inverse value
  console.log(!0) //true
  console.log(!1) //false

}

function conditionals() {
  if (a=== 1) {

  } else {

  }
  
  let result = condition ? value1 : value2;

  switch(x) {
    //equality check is strict (===)
    case 'value1':
      //do something
      break;
    case 'value2': //grouped cases
    case 'value3':  // if (x === 'value2')
      //do something
      break; //optional, but if is not present next code would be executed
  
    default:
      //do something
  }  
}

function numberReview() {
  //DATA TYPES
  //I. Primitives
  //I.1 Numbers
  let decimal = 10;
  let octal = 102;
  let hexadecimal = 0xF;
  let floatingPoint = 2.5;

  console.log('isFinite: ' + isFinite(2));
  console.log("isNaN('test' / 2): " + isNaN('test' / 2));
  
  //I.2 Strings
  let doubleQuote= "Hello";
  let singleQuote= 'Halo';
  let backticks= `Hello ${1+3}`;
  console.log('`Hello ${1+3}`: ' + backticks);

  //I.3 Boolean
  let bool=true;

  //I.4 Symbol, is used to create unique identifiers for objects
  let symbol = Symbol("id");

  //II. Trivial
  //II.1 null
  let nullable= null;
  console.log('typeof nullable returns object: ' + typeof nullable);

  //II.2 undefined
  let undefinedValue;
  console.log('undefinedValue: ' + undefinedValue);

  //III. Composite
  //III.1. Objects
  console.log('typeof Math: ' + typeof Math);

  //III.2 Arrays

  //III.3 Functions
  console.log('typeof console.log: ' + typeof console.log);
}

function conversions() {
  //CONVERSIONS
  let val = String(false);
  console.log('String(false): ' + val);

  let num = Number(val)
  console.log(typeof num);
  console.log(Number(undefined)); //NaN
  console.log(Number(null)); //0
  console.log(Number(true)); //1
  console.log(Number('string')); //NaN

  console.log(Boolean(undefined)); //false
  console.log(Boolean(null)); //false
  console.log(Boolean('0')); //true
  console.log(Boolean(0)); //false
  console.log(Boolean(1)); //true
  console.log(Boolean('string')); //true
}

function operators() {
  //Operator = always return a value
  console.log('Remainder:' + 5 % 2);
  console.log('Exponentiation:' + 5 ** 2);

  let counter = 1;
  let a = ++counter;
  let b= counter++;
  console.log('let a = ++counter; ' + a);
  console.log('let b= counter++; ', b);
}

function comparisons(){ 
  //When comparing values of different types, 
  //JavaScript converts the values to numbers.
  console.log('01'== 1); //true
  console.log('01'=== 1); //false
  console.log(null == undefined ); // true
  console.log(null === undefined ); // false
  //Avoid to use comparisons >= > < <= with a variable 
  //which may be null/undefined  
}
