// const currency = {
//     usd: 'dollar',
//     blr: 'bel rouble',
//     rus: 'rus rouble',
// }

// // for (let key in currency){
// //     console.log(key)
// // }

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


// const min = (a, b) => (a<b)?a:b
// console.log(min(2,5))

//рекурсия 
// const sumTo = (n) => {
//     if (n === 1) return n;
//     return n + sumTo(n-1) 
// }
// console.log(sumTo(4))


//замыкание
// const sum = (a) =>{
//     return function (b){
//         return a +b
//     }
// }
// console.log(sum(10)(20));

// const list = {
//     a: 'a',
//     b: 'b',
//     next:{
//         a: 'a-1',
//         b: 'b-1',
//         next:{
//             a: 'a-2',
//             b: 'b-2',
//             next: null
//         }  
//     }
// }
// const fun = (list) =>{
//     console.log(list.a)
//     if (list.next)return fun(list.next)
//     return; 
// };
// fun(list)

// const str = 'aaa bbb ccc'


// // console.log(str.substring(4,7))
// // console.log(str.slice(4,7))

// const search = str.indexOf('bbb');
// console.log(str.slice(search, search+3))


// let array = [2,3,4, undefined, null, '', false, 5,6,0];
// let arr = array.filter(Boolean)
// console.log(arr)



let sumInput = [1,2,3,4,5]
let sum = sumInput.reduce((a,b) => {
    return a+b
},0)
console.log (sum)






