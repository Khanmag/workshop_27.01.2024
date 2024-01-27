
var box1 = 'data1';
let box2 = 312312;
const box3 = true;

//Types
//string
const type1 = 'he say "Hi!"';
const type1_1 = "I'm";
const type1_2 = `template string`;
// console.log(type1);
// console.log(type1_1);

//number
const type2 = 3123.12

// bigint
const type3 = 99999999999999999999999n
// console.log(type3);

// boolean
const type4 = true
const type4_1 = true

// symbol
const type5 = Symbol('id')
const type5_1 = Symbol('id')
// console.log(type5 === type5_1); // false

//null undefined
const type6 = null
const type7 = undefined
let type7_1
// console.log(type6);
// console.log(type7);
// console.log(type7_1);

//object - набор пар ключ - значение
const type8 = {
  title: "Memoty game",
  description: "game for memory training",
  duration: 16,
  headLiner: {
    name: "Shamil",
  }
}
// console.log(type8);
type8.title = "MG"
type8.count = 1000
// console.log(type8);

// Array - массив
const arr = [
  "Memoty game",
  "game for memory training",
  16,
]
// console.log(arr);
// console.log(arr[1]);
const newArr = [...arr, true]
// console.log(newArr);


// Functions

function sayHi(text) {
  // console.log("HI!!!");
  console.log(text);
}

const timesFunc = (num) => {
  if (num < 0) {
    return num * -100
  }
  else {
    return num * 100
  }
  
}

// sayHi("some text")
const res1 = timesFunc(1)
console.log(res1);

console.log(timesFunc(-5));


const numArr = [1, 2, 3, 4, 5]
// Цикл for
for (item of numArr) {
  console.log(item);
}













