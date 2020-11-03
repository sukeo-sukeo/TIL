
const arry = [3, 1, 2, 4, 5, 49, 300];
arry.sort((a, b) => {
  // console.log(b);
  // console.log(b);
  return b - a;
});
// console.log(arry);
//引数aに[1]から順番に入っていく
//引数b？


// new Promise((resolve, reject) => {
//   console.log('promise');
//   // resolve('hello')
//   reject('bye')
// }).then((data) => {
//   console.log('then:' + data);
//   // throw new Error()
//   return data
// }).then((data) => {
//   console.log('then:' + data);
// }).catch((data) => {
//   console.log('catch:' + data);
// }).finally((data) => {
//   console.log('finally');
// })
// console.log(('global end'));

// const data = ["sukeo 1", "oja 5", "chee 3", "sukeo"];
// const s = data.pop();
// const dict = {}
// data.forEach((v) => {
//   dict[v.split(' ')[0]] = v.split(' ')[1]
// });
// console.log(dict[s]);

// const data = ["sukeo 1", "oja 5", "chee 3", "sukeo"];
// const s = data.pop();
// const dict = new Map();
// data.forEach((v) => {
//   //set('key','value')でdictにkey&valueをセットする
//   dict.set(v.split(" ")[0], v.split(" ")[1]);
// });
// //get(s)で'sukeo'がKeyとなっている値をゲットする
// // console.log(dict.get(s));
// console.log(dict.size);
// dict.forEach(v => console.log(v))

const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo']
const s = data.pop();
const dict = {}
data.forEach((v) => {
  dict[v.split(' ')[0]] = v.split(' ')[1]
});
console.log(dict) // 1

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