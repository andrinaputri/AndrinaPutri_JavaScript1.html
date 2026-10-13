//JavaScript --> Programming Language
/*
Programming Language
1. input & output
2. variable and data type
3. condition (if, else)
4. looping (perulangan)
5. function
*/

//Output
//1. using console.log()
console.log("Hello World!");
console.log("My name is Nina");
console.log(20 + 5);

//2. alert()
alert("Welcome to My Website!");

//3. document.write()

//4. using innerHTML
//document.getElementById("id_name").innerHTML = "text";
document.getElementById("First").innerHTML = "My name is Nina";

//variable --> to store data
 
//let
let name = "Nina";
name = "Andrina";
console.log(name)
let a = 4;
let b = 5;
let c = a + b
let d = a*b
console.log(a+b)
console.log(c)
console.log(c+d)
let address= "Jl. Raya Bogor"
console.log("My name is " + name + " and I live in " + address)

let oke = 8;
let OKE = 7;
console.log(oke);
console.log(OKE);

const school = "SMA ABBS Surakarta";

/*
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagian (/)
modulus (%)
perpangakatan
*/
let number1 = 100;
let number2 = 250;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** 2);

//calculator BMI
let tb=165
let bb=55

let bmi = (bb/(tb*tb))*10000

console.log(bmi);

//variable = let, var, const
let angka = 5;
angka = 6;
console.log(angka);

var angka1 = 5;
var angka1 = 6;
console.log(angka);

const angka2 = 5;
//angka2 = 6; (tidak boleh)
console.log(angka2);

/*Data Type
1. String = Character --> using "" or ''
2. Number = Integer or Float
          - Bilangan Integer (bulat) = 1, 2, 3, 4, 5
          - Bilangan Float = pecahan
3. Boolean = True or False
           - true, false
*/
let data = "SMA ABBS Surakarta"; // string
let data1 = "100"; //string
let data3 = 50; //integer
let data4 = 25.25; //float
let data5 = false; //boolean

/*Comparison Operator --> the output of comparison operator is boolean (true or false)
- equal (==)
- not equal (!=)
- greater than (>)
- less than (<)
- greater than or equal (>=)
- less than or equal (<=)
*/

let x = 5;
let y = 10;
console.log(x == y); // false
console.log(x != y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true

/*
logical operators
- and (&&) semua kondisi harus true
- or (||) minimal satu kondisi harus true
- not (!) membalikkan nilai boolean
*/

//Condition

/*1. if (1 condition)
if (condition) {
    action;
    }
*/

let time = 6;
if (time <=6){
    console.log("Good Morning!");
}
else{
    console.log("Good Bye!");
}

/*kondisi
1. jika hari ini hujan, maka membawa payung
2. jika hari ini tidak hujan, maka tidak membawa payung
*/

let weather = "hujan";

if (weather == "hujan") {
    console.log("Membawa payung");
} else {
    console.log("Tidak membawa payung");
}

//jika nilai lebih dari 75, maka lulus
// jika nilai kurang dari 75, maka tidak lulus

let nilai = 90;
console.log("nilai = " + nilai);
if (nilai > 75) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika bilangannya itu ganjil, maka ganjil

let bilangan = 7;

if (bilangan % 2 === 0) {
    console.log("Genap");
} else {
    console.log("Ganjil");
}

/*More than 2 conditions
if (condition 1){
    action 1;
}
else if (condition 2){
    action 2;
}
else{
    action 3;
}
*/

let TB=165
let BB=60

let BMI = (BB/(TB*TB))*10000
console.log("Tinggi Badan = " + TB + " cm");
console.log("Berat Badan = " + BB + " kg");
console.log("BMI = " + BMI);

if (BMI < 18.5){
    console.log("Kekurangan Berat Badan");
}
else if (BMI >= 18.5 && BMI <= 24.9){
    console.log("Normal (Ideal)");
}
else if (BMI >= 24.9 && BMI <= 29.9){
    console.log("Kelebihan Berat Badan");
}
else{
    console.log("Kegemukan (Obesitas)");
}
