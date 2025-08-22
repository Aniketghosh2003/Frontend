//ex-1
// const addchar = (str) =>
//     str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
// console.log(addchar('aniketghosh'));
// console.log(addchar('an'));

//ex-2
// const extarctstr = (str) => str.slice(0,str.length/2);
// console.log(extarctstr('aniket'));

//ex-3
// const constr = (str1,str2) =>{
//     return str1.slice(1) + str2.slice(1);
// };
// console.log(constr('aniket','ghosh'));

//ex-4
// const nearer = (a, b) => {
//   const c = 100 - a;
//   const d = 100 - b;
//   return c < d ? a : b;
// };

// console.log(nearer(35, 40));

//ex-5
const countchars = (str, char) => {
  const a = str.split('').filter((ch) => ch === char);
  return a >= 2 && a <= 4;
};

console.log(countchars('oooh','o'));
