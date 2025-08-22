// const leapyear = (a) => {
//       if (((a%4 === 0) && (a % 100 !== 0)) || (a % 400 === 0)) {
//         return true
//       }
//       else return false;
// };
// console.log(leapyear(2000));

// const obja = {a : 1,b : 2,c : 1};
// const objb = {a : 1,b : 1,c : 1};
// const objc = {a : 1,b : 1,d : 1};
// const objectsequal = (a,b) =>
//      Object.keys(a).every(key => b[key]);
// console.log(objectsequal(obja,objb));
// console.log(objectsequal(obja,objc));
// console.log(objectsequal(objb,objc));

// const csv = (csvstring) => 
//      csvstring.split('\n').map(row => row.split(','));
// const str = `abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`;
// console.log(csv(str));

// const getrandomnum = () => 
//     Math.floor(Math.random() * 16 ).toString(16);
// const getrandomcolour = () => '#' + Array.from(
// {length : 6}).map(getrandomnum).join('');
// console.log(getrandomcolour());

//const check = (arr)