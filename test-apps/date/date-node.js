const date = new Date()
console.log(date);

const halloween = new Date(2020, 9, 31)
// console.log(halloween);

  const arr1 = [11, 22, 33];
  const arr2 = [44, 55];

  const arr3 = [...arr1, ...arr2];
  console.log(arr3);
  
  const arry = new Array(5)

// const v = ["5", "8.13", "81.3", "813", "0.813", "1.381"]
// [...arry].forEach(() => console.log('hello')

Array(10)
  .fill()
  .forEach((_, i) => console.log("hello"));
module.exports = date