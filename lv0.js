// alert("hello world");
console.log("hello world");
let arr = [1, 5, 6, 7, "8", 10];
function add(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
console.log(add(arr));