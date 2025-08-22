//1
// const evendigit = (arr) => {
//      const cnt = arr.filter(num => num % 2 === 0).length
//      return cnt
// };
// console.log(evendigit([2,4,6,1,3]));

//2
// const counteven = (arr) => 
//     arr.filter(num => num%2 === 0).length;
// const createarr = (num) => {
//     const arr = []
//     for (let i = 1; i <= num ; i++){
//     arr.push(i);
//     }
//     return arr;
// }
// console.log(counteven(createarr(9)));

//3
// const checksorted = (arr) => {
//     var temp = true
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[i+1]){
//             temp = false
//         }
//     }
//     return temp
// };
// console.log(checksorted([1,2,6,4,5]))

//4
// const largestevennum = (arr) => {
//      var ele = -10000
//      for (let i = 0; i < arr.length; i++) {
//         if (ele < arr[i] && arr[i] % 2 === 0) {
//             ele = arr[i]
//         }
//      }
//      return ele
// };
// const largestevennum = (arr) =>
//      Math.max(...arr.filter(num => num %2 ===0));
// console.log(largestevennum([2,3,4,5,6,7,8]));

//5
const replacedigit = (str) =>
    // str.replace(/[0-9]/,'$')
str.replace(/\d/,'$');

console.log(replacedigit('abn5bsg'));