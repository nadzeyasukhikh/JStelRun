// let str = 'vdsvsdv';
// let arr = [1, 2, 3];

// str[0] = "A";

// arr[0] = 99;

// console.log(str[0]);
// console.log(arr[0]);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(`${arr[i]} x ${arr[j]} = ${arr[i] * arr[j]}`);
//     }
// }

// let elem1 = 0
//     let elem2 =0
//     let res=0
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         elem1=i
//         elem2=j
//         res=elem1*elem2
        
//         console.log(elem1 +"*"+elem2+"="+res);        
//     }
    
// }
// for (let i= 1; i <= 9; i++){
//     console.log("1 * " + i)
//     for ( let m = 9; m >= i; m--){
//       let mult = i *m;
//       console.log (i + "*" + m + "=" + mult)
//     }
//   }

// function multiTable (){
//     for (let i = 1; i < 10; i++){
//         for (let j = 1; j < 10; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }
//     }
// }
// multiTable()

// let i = 1;
// let j = 1;

// for( ;i < 10; i++) {
//   for(; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const arr = [8, 2, 3, -1, 1, 2, 874, 5];

// forEach()

// arr.forEach((el) => {
//     if (el > 0) {
//         console.log("positiv")
//     } else {
//         console.log("negativ")
//     }
// });
// arr.forEach((el, ind, arr) => {
    
   
//     console.log(arr[ind + 1]);
// });


// const users = [
//     {
//         name: "Alice",
//         age: 35,
//     },
//     {
//         name: "Bob",
//         age: 35,
//     },
//     {
//         name: "Mike",
//         age: 35,
//     },
// ];
// users.forEach((el) => {
//     console.log(el.name)
// })

// const arr = [8, 2, 3, -1, 1, 2, 874, 5];

// arr.forEach((el, ind, arr) => {
  
//      console.log(el);
//      console.log(ind);
//     console.log(arr);
    
//   })

// const arr = [2, 6, 5, 4, 8, 4];
// const arr2 = [7, 9, 5, 5];

// const sum = [];

// for(let i = 0; i < arr.length; i++) {
//     sum.push(arr[i]);
// }

// for(let i = 0; i < arr2.length; i++) {
//     sum.push(arr2[i]);
// }
// console.log(sum);

const arr = [2, 6, 5, 4, 8, 4];
const arr2 = [7, 9, 5, 5];


arr.forEach((el, ind, arr) => {
  if(ind < arr2.length) {
    arr.push(arr2[ind])
  }
})
console.log(arr);