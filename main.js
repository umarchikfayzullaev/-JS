const arr = [3, 8 ,12];
const even = (elem) => elem % 2 === 0;
console.log(arr.some(even));

// ansver is TRUE

let num = 13;
const minusEight = x => x - 8;
num = (num--, num *= 3, num = minusEight(num), num -=4);
console.log(num);
// ansver is 24


let a = 0;
for(let i = 0; i < 5; i++) {
    a++
}
console.log(5);
// answer is 5


const sym = Symbol("key");
const javascript_tests = Symbol.keyFor(sym);
console.log(javascript_tests);
// ansver (undefined)


// const arr = [NaN, 10, false];
// console.log(Array.from(arr, x => x +x));
// answer ([Nan, 20, 0])

// const arr = [2, 5, 7, 15];
// const func = (element) => {
//   if (element > 6) return true;
// }
// console.log(arr.find(func));
// answer (7)