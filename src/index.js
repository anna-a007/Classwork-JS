// const currency = {
//     usd: 'dollar',
//     blr: 'bel rouble',
//     eur: 'euro',
// }

// let key = prompt('Введите валюту');
//     console.log(currency[key])


// let user = {
//     name: 'Anna',
//     age: 27
// }


// for (let key in user){
//     console.log(user[key]) // вывод значений
//     console.log(key) // вывод ключей

// }

// let descriptor = Object.defineProperty(user, 'age', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// descriptor.age = 20;
// console.log(user)

// for (let key in currency){
//     console.log(key)
// }

// let descriptor = Object.defineProperty(currency, 'usd', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// });


// descriptor.usd = 'wwwwwww'
// console.log(currency)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key]
// }
// console.log(sum);

// function sum (a,b){
//     console.log(a +b)
// }
//   sum (2,5)

// function sayHi(){
//     for (let arg of arguments){
//         console.log(arg)
//     }
// }
// sayHi('123', 'jfdlsjs', 123) // передавать сколько угодно параметров
// //arguments - псевдомассив




// const sum = (...res) => {
//     let a = 0;
//     for (let i of res){
//         a += i 
//     }
//     return a
// }
// console.log(sum(1,2,3))


// const min = (a, b) => {
//     return (a<b)?a:b

// }
// console.log(min(2,5))


let arr = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8];

let sum = 0;

function sumTree(array){
    array.forEach((item) =>{
        Array.isArray(item) ? sumTree(item) : sum +=item;
    });
    return sum;
}
console.log(sumTree(arr));






// function sumTree(arr){
//     let sum = 0;
//     arr.forEach(function(item){
//         if(Array.isArray(item) ){
//             sumTree(item)
//         }
//         else{
//             sum +=item
//         } 
//     });

//     return sum;
// }
// console.log(sumTree(arr));


//1
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let veg = ['sfsf', 'fggsfg', 'sgsggg', 'Морковка'];


// let copyArr = (array) =>{
//     return array.slice()
// }
// console.log(copyArr(vegetables))


//2
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let str = (arr) =>{
//     return arr.join()
// }

// let str2 = (arr) =>{
//     return arr.toString()
// }
// console.log(str(vegetables))
// console.log(str2(vegetables))

//3???

// let num = prompt('Введите число')


// let colonOd = (num) =>{
//     let vvodStr = num.toString()
//     for (let i of num ){
//         if ((i % 2 !== 0) && ((i-1)%2 !==0 )){
//             num.splice(':')
//         }
        
//     }
//     return
// }
// console.log(colonOd(num))


//4
// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
// let upper = 'АБВГД';
// let lower = 'абвгд';
// let k = [];
// let changeRegister = (str) =>{
//     for (let i of str.length){
//         if (upper.includes(i)){
//             return k.toUpperCase()
//         }
//         else if(lower.includes(i)){
//             return k.toLowerCase()()
//         }
//         else{
//             return k
//         }
//     }
// }

// console.log(changeRegister(str))

//5
// let arr = ["php", "php", "css", "css","script", "script", "html", "html", "java"];

// let removeDuplicates = (arr) =>{
//     const tempArr = [];
//     arr.forEach((item) => {
//         if(!tempArr.includes(item)){
//             tempArr.push(item);
//         }
//     });
//     return tempArr;
// };

// console.log(removeDuplicates(arr))