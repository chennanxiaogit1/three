/* let arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]

function even(arr){
   arr = arr.join();
  //  console.log(arr);
    arr = arr.split(",");
   // console.log(arr);
    return arr;
}

console.log(even(arr));  // [1,2,3,4,5,6,7] */

let arr = [
    { id: 10, name: "kc" },
    { id: 8, name: "hy" },
    { id: 15, name: "pipi" },
    { id: 2, name: "mama" },
  ];

  function compareNumbers(a, b) {
    return a - b;
  }
  let newArr = [],
    i,
    j,
    temp;
  for (i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].id;
  }
  newArr = newArr.sort(compareNumbers);
 // console.log(newArr);
  for (i = newArr.length - 1; i >= 0; i--) {
    for (j = newArr.length - 1 + i - 3; j >= 0; j--) {
      if (newArr[i] == arr[j].id) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);