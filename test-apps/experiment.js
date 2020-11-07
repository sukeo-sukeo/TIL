const arry = [[2, 2], [2, 3], [3, 1]]

arry.sort((a, b) => {
  return b[0] - a[0];
})

arry.sort((a, b) => {
  if (b[0] === a[0]) {
    return b[1] - a[1];
  }
})
console.log(arry);

arry.forEach((v) => {
  console.log(v[0], v[1]);
})
