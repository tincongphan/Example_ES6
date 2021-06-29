
/*      =======> New Feature's ES6

  1/    Let & const
  2/    Arrow function
  3/    Import & export
  4/    Restparameter & spread oparater
  5/    Default parameter
  6/    Destructuring
  7/    Template strings
  8/    Objects literal
  9/    For in & For of
  10/   OOP
  11/   Fillter, Find, FindIndex, ForEach, Map, Reduce, Reverse, Sort.
 */


//  ====> Var &  Let & const

var number1 = 6;
if(true){
    var number1 = 8;
}
console.log(number1); // 8


let number2 = 6;
if(true){
    let number2 = 8;
}
console.log(number2); // 6


const number3 = 6;
number3 = 8; // error

const number4 = {id : 1, name: "abc" }
number4 = {id: 2, name: 'momo'} // error
number4.name = 'xyz';
console.log(number4);  // {id: 1, name: "xyz"}