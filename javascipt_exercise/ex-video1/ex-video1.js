//Ex -1
//1.
// function check(a , b){
//     if (a === 100 || b === 100) {
//         return true;
//     }
//     else if (a+b === 100) {
//         return true;
//     }
// }
// var x = check(70 , 50);
// if(!x){
//     console.log("succesful");
// }
//2.
// const check = (a,b) => a === 100 || b === 100 || (a+b) === 100;
// console.log(check(10,0));

//-------------
//ex2

// const getextension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getextension('index.html'));

//ex3
// const replacechar = (str) =>
//   str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");

// console.log(replacechar('aniket'));

//ex4
// const getdate = (date = new Date()) => {
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();

//   return ` ${day}/${month}/${year} `;
// };

// console.log(getdate());

//ex5
// const newstring = (str) => {
//       const str1 = 'New! ' + str;
//       return str1;
// };

const addnew = (str) => 
    str.indexOf('New!') === 0?str: `New! ${str}`;

console.log(addnew('New! toy'));
      
