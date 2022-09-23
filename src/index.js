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


const min = (a, b) => {
    return (a<b)?a:b

}
console.log(min(2,5))