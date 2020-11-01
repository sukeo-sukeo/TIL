
const arry = [3, 1, 2, 4, 5, 49, 300];
arry.sort((a, b) => {
  // console.log(b);
  // console.log(b);
  return b - a;
});
// console.log(arry);
//引数aに[1]から順番に入っていく
//引数b？


new Promise((resolve, reject) => {
  console.log('promise');
  // resolve('hello')
  reject('bye')
}).then((data) => {
  console.log('then:' + data);
  // throw new Error()
  return data
}).then((data) => {
  console.log('then:' + data);
}).catch((data) => {
  console.log('catch:' + data);
}).finally((data) => {
  console.log('finally');
})


console.log(('global end'));

// const fn1 = (n) => {
//   return new Promise((resolve, reject) => {
//     console.log('fn1', n);
//     n = n + 1
//     resolve(n)
//   })
// }

// const fn2 = (n) => {
//   return new Promise((resolve, reject) => {
//     console.log('fn2', n);
//     n = n + 1
//     resolve(n)
//   })
// }

// fn1(1)
// .then((n) => {
//   setTimeout(() => {
//     console.log(n)
//   }, 1000)
//   return n
// })
// .then((n) => console.log('end'))