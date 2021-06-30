
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

const fcNumber = function () {
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
    name: "abc",
    showInfo: () => {
        console.log(this); // window
        console.log(this.name); // undefinded
    }
}

student.showInfo()

const student1 = {
    name: "abc",
    showInfo: function () {
        console.log(this); // {name : "abc", showInfo : function}
        console.log(this.name); // abc
    }
}

student1.showInfo()

// Rest Parameters
// Các tham số truyền vào sẽ hợp thành 1 mảng. Dùng khi không biết đầu vào có bao nhiêu tham số

function RestPara(...restpara) {
    console.log(restpara);
    let sum = 0;
    for (let i = 0; i < restpara.length; i++) {
        sum += restpara[i]
    }
    console.log(sum);
}
RestPara(1, 2)
RestPara(1, 2, 3)
RestPara(1, 2, 3, 4)

// Default Parameters
// Cho phép set giá trị mặc định tham số (parameters) nếu như không có đối số (arguments) truyền vào

function tinhTong(a = 10, b = 10) {
    console.log(a + b);
}

tinhTong() // 122

// For in & For of

// ====> Duyệt mảng

let arrayStudent = [{ name: "nguyen a, age: 12" }, { name: "nguyen b, age: 13" }, { name: "nguyen c, age: 14" }]

for (item in arrayStudent) {
    console.log(item);
}
// For in trả về chỉ số index : 0, 1, 2

for (item of arrayStudent) {
    console.log(item);
}

/* For of trả về từng phần tử trong mảng

{name: "nguyen a, age: 12"}
{name: "nguyen b, age: 13"}
{name: "nguyen c, age: 14"}

*/

// ====> Duyệt object

let object = {
    name: 'nguyen thi a',
    age: 20,
    address: "ho chi minh city"
}

for (item in object) {
    console.log(item);
}

// For in trả về thuộc tính ( key ) của object: name, age, address. Không dùng for of cho object

/* OOP có 4 tính chất : 4 main principles
    1/ Tính đóng gói:   encapsulation
    2/ Tính đa hình:    polymorphism
    3/ Tính kế thừa:    inheritance
    4/ Tính trừu tượng: abstraction
 */

// ES5
function hocsinh(ten, tuoi) {
    this.name = ten,
        this.age = tuoi,
        this.xuatThongTinHS = function () {
            console.log('thong tin hoc sinh', this.name, this.age);
        }
}

let student3 = new hocsinh("nguyen a", 15)
student3.xuatThongTinHS()

// ES6
class hocsinh_ {

    constructor(ten_hs, tuoi_hs) {
        this.TEN_HS = ten_hs,
            this.TUOI_HS = tuoi_hs
    }
    // xuatThongTinHS_ = () => {
    //     console.log(this.TEN_HS, this.TUOI_HS);
    // }
    xuatThongTinHS_() {
        console.log(this.TEN_HS, this.TUOI_HS);
    }
}

let student4 = new hocsinh_("nguyen b", 17)
student4.xuatThongTinHS_()

// Tính kế thừa ( extend )

class NhanVien {
    constructor(manv, tennv) {
        this.maNV = manv,
            this.tenNV = tennv
    }
    tinhLuong() {
        return 1000;
    }
}

class QuanLy extends NhanVien {

    constructor(manv, tenvn, mangPhongBan) {
        super(manv, tenvn);
        this.dsPhongBan = mangPhongBan
    }
    tinhLuong() {

        return super.tinhLuong + 1000;
    }
}

let manager = new QuanLy(1, "nguyen b", "CNTT")

console.log(manager); // QuanLy {maNV: 1, tenNV: "nguyen b", dsPhongBan: "CNTT"}

// Fillter: trả về kết quả là 1 mảng

let listProduct = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'iphone 5', price: 300 },
    { id: 3, name: 'iphone 6', price: 400 },
    { id: 4, name: 'iphone 7', price: 300 },
    { id: 5, name: 'iphone 8', price: 600 }
]

let product = listProduct.filter(sanpham => sanpham.price === 300)
console.log(product);
/*
  {id: 2, name: 'iphone 5', price: 300},
  {id: 4, name: 'iphone 7', price: 300},
 */

//   Find: trả về kết quả là 1 đối tượng. Nếu không có phần tử thỏa điều kiện trả về undefinded.
//   Nếu có 2 object thỏa điều kiện, nó trả về phần tử đầu tiên.

let price = listProduct.find(item => item.price === 300)
console.log(price); // {id: 1, name: 'iphone 4', price: 200}

let nextPrice = listProduct.find(item => item.price === 1000)
console.log(nextPrice); // undefinded

// FindIndex: trả về chỉ số index. Nếu không tìm thấy phần tử thỏa điều kiện trả về -1

let index = listProduct.findIndex(item => item.id === 3)
console.log(index); // 2

let index_1 = listProduct.findIndex(item => item.id === 7)
console.log(index_1);

// Foreach: dùng để xử lý mảng, không trả về cái gì cả. Mảng có bao nhiêu phần tử thì duyệt bấy nhiêu lần.

let listProduct_1 = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'iphone 5', price: 300 },
    { id: 3, name: 'iphone 6', price: 400 },
    { id: 4, name: 'iphone 7', price: 300 },
    { id: 5, name: 'iphone 8', price: 600 }
]

listProduct_1.forEach((item, index) => {
    console.log(item);
    /* Kết quả
       {id: 1, name: 'iphone 4', price: 200}
       {id: 2, name: 'iphone 5', price: 300}
       {id: 3, name: 'iphone 6', price: 400}
       {id: 4, name: 'iphone 7', price: 300}
       {id: 5, name: 'iphone 8', price: 600}
     */
})


// Map : giống foreach() nhưng khác ở chỗ nó có giá trị trả về và lặp qua từng phần tử

let listProduct_2 = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'iphone 5', price: 300 },
    { id: 3, name: 'iphone 6', price: 400 },
    { id: 4, name: 'iphone 7', price: 300 },
    { id: 5, name: 'iphone 8', price: 600 }
]

let result_map = listProduct_2.map((item, index) => {

    if (item.id % 2 === 0) {
        return item;
    }
})

console.log(result_map);
/*
    0: undefined
    1: {id: 2, name: "iphone 5", price: 300}
    2: undefined
    3: {id: 4, name: "iphone 7", price: 300}
    4: undefined
 */

// Reduce: thực thi n lần so với n phần tử trong mảng tạo ra 1 giá trị mới
// có thể là 1 mảng, 1 object ... tùy theo xử lý return trong hàm


let listProduct_3 = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'iphone 5', price: 300 },
    { id: 3, name: 'iphone 4', price: 400 },
    { id: 4, name: 'iphone 4', price: 300 },
    { id: 5, name: 'iphone 8', price: 600 }
]

// Tính tổng tiền
const result_reduce = listProduct_3.reduce((total, sanpham, index) => {

    return total += sanpham.price
}, 0)

console.log(result_reduce); // 1800

// Tạo ra mảng mới

const newArray = listProduct_3.reduce((array, sanpham, index) => {

    if (sanpham.name === "iphone 4") {
        array.push(sanpham)
    }
    return array;
}, [])

console.log(newArray);
/*
    0: {id: 1, name: "iphone 4", price: 200}
    1: {id: 3, name: "iphone 4", price: 400}
    2: {id: 4, name: "iphone 4", price: 300}
 */

//  Reverse: Đảo mảng

let listProduct_4 = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'iphone 5', price: 300 },
    { id: 3, name: 'iphone 4', price: 400 },
    { id: 4, name: 'iphone 4', price: 300 },
    { id: 5, name: 'iphone 8', price: 600 }
]

let result_reverse = listProduct_4.reverse()
console.log(result_reverse);
/*
    0: {id: 5, name: "iphone 8", price: 600}
    1: {id: 4, name: "iphone 4", price: 300}
    2: {id: 3, name: "iphone 4", price: 400}
    3: {id: 2, name: "iphone 5", price: 300}
    4: {id: 1, name: "iphone 4", price: 200}
 */


// Sort: Sắp xếp tăng dần hoặc giảm dần

let listProduct_5 = [
    { id: 1, name: 'iphone 4', price: 200 },
    { id: 2, name: 'samsung ', price: 300 },
    { id: 3, name: 'xiomi', price: 400 },
    { id: 4, name: 'samsung', price: 300 },
    { id: 5, name: 'nokia', price: 600 }
]

//  Sắp xếp theo chuỗi
let sapXep = listProduct_5.sort((spTiepTheo, spHienTai) => {

    let spNext = spTiepTheo.name.toLowerCase();
    let spCurrent = spHienTai.name.toLowerCase();
    if (spNext > spCurrent) {
        return 1; // Giữ nguyên
    } else {
        return -1; // Đảo vị trí
    }
})

console.log(sapXep);

/*
    0: {id: 1, name: "iphone 4", price: 200}
    1: {id: 5, name: "nokia", price: 600}
    2: {id: 4, name: "samsung", price: 300}
    3: {id: 2, name: "samsung ", price: 300}

 */

// Sắp xếp theo số

let sapXepTheoSo = listProduct_5.sort((spNext, spCurrent) => {
    return spNext.price - spCurrent.price  // giá sau trừ giá trước > 0 thì sắp xếp tăng dần
})
console.log(sapXepTheoSo);

/*
    0: {id: 1, name: "iphone 4", price: 200}
    1: {id: 4, name: "samsung", price: 300}
    2: {id: 2, name: "samsung ", price: 300}
    3: {id: 3, name: "xiomi", price: 400}
    4: {id: 5, name: "nokia", price: 600}
*/


// Promise
/*
-   Promise sinh ra để giải quyết vấn đề callbackhell
-   Các bước khởi tạo Promise:
    1/ new Promise
    2/ truyền vào function với 2 tham số resolve, reject
-   Excutor sẽ thực thi ngay trước khi trả về giá trị cho promise
-   Có 3 trạng thái: Pending, Fullfill, Reject
-   Nếu trong excutor function không gọi resolve or reject sẽ gây ra memory leak
-   Khi gọi resolve() or reject() thì sẽ rơi vào then or catch để xử lý. Nhưng sẽ luôn chạy finally()
*/
let promise = new Promise(

    // excutor
    function (resolve, reject) {
        // resolve("success")
        reject("error")
    }
)

promise
    .then((message) => {
        console.log(message); // success 
    })
    .catch((error) => {
        console.log(error) // error
    })
    .finally(() => {
        console.log("done")
    })


// Promise Chain. Thường dùng khi data của then sau phụ thuộc vào then trước

// Case 1: Khi giá trị return trả về không phải là 1 promise
let promise_1 = new Promise((resolve, reject) => {
    resolve()
})

promise_1
    .then(() => {
        return 1;
    })
    .then((data) => {
        console.log(data); // 1
        return 2;
    })
    .then((data) => {
        console.log(data)  // 2
        return 3;
    })
    .then((data) => {
        console.log(data);  // 3
       
    })

//  Case 2: Khi return trả về là 1 promise
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, ms)
    })
}

sleep(2000)
    .then(function (resolve) {
        console.log(1);
        return sleep(1000)
    })
    .then(function () {
        console.log(2)
        return sleep(1000)
    })
    .then(function () {
        console.log(3);
    })


//  Promise all: Thường dùng khi các Promise không phụ thuộc lẫn nhau.

let promiseAll_1 = new Promise(function (resolve, reject) {
    
    setTimeout(function () {
        resolve([1, 2])
    }, 1500)
})


let promiseAll_2 = new Promise(function (resolve, reject) {
    
    setTimeout(function () {
        resolve([3, 4])
    }, 1500)
})

Promise.all([promiseAll_1, promiseAll_2])
        .then(function (data) {
            console.log(data);
            let data_1 = data[0];
            let data_2 = data[1];
            console.log(data_1.concat(data_2));
        })















