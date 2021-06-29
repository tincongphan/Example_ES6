
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

// var number1 = 6;
// if(true){
//     var number1 = 8;
// }
// console.log(number1); // 8


// let number2 = 6;
// if(true){
//     let number2 = 8;
// }
// console.log(number2); // 6


// const number3 = 6;
// number3 = 8; // error

// const number4 = {id : 1, name: "abc" }
// number4 = {id: 2, name: 'momo'} // error
// number4.name = 'xyz';
// console.log(number4);  // {id: 1, name: "xyz"}


// ======> Hoisting

//  Khi khai báo với var thì biến sẽ được kéo lên đầu, còn let và const thì không.
// console.log(a); // undefinded
// var a = 1;

// console.log(b);
// let b = 1; // error

//  let và const khắc phục hoisting của var. Nghĩa là không thể sử dụng let & const trước khi khai báo.

// =====> Function Scope: là phạm vi khai báo biến bên trong 1 hàm.

const fcNumber = function (){
    var a = 5;
}

// console.log(a); // error

// =====> Block Scope: là phạm vi khai báo biến bên trong {...}
// if(true){
//     var x = 1;
// }
// console.log(x); // x = 1

// if(true){
//     let y = 2;
// }
// console.log(y); // error

// var không tuân thủ block scope. Let & Const sinh ra để khắc phục điều đó

// =====> Arrow Function

/* This context
 ==> Function thường: bên trong function có sẵn con trỏ this, thay đổi theo ngữ cảnh
 ==> Arrow function: không có con trỏ this. Nếu gọi this trong arrow function nó sẽ lấy 
 this của function thường bên ngoài gấn nó nhất
 
 */
const student = {
    name : "abc",
    showInfo : () => {
        console.log(this); // window
        console.log(this.name); // undefinded
    }
}

student.showInfo()

const student1 = {
    name : "abc",
    showInfo : function() {
        console.log(this); // {name : "abc", showInfo : function}
        console.log(this.name); // abc
    }
}

student1.showInfo()

