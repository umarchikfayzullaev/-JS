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