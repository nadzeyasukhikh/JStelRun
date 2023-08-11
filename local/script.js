// localStorage.setItem("sdfre","dkfjgh");

// const userInfo = {
//     name: localStorage.getItem("name"),
// };
// console.log(userInfo);

// localStorage.removeItem("id");

// let num = 1;
// localStorage.setItem("number", num);

// const userInfo = {
//     name: "Bob",
//     id: 5647589,
//     friend: ["mike","joe","alice"],
// };
// localStorage.setItem("userObj", JSON.stringify(userInfo));

// console.log(JSON.stringify(userInfo));

// const userObj = JSON.parse(localStorage.getItem("userObj"));

// console.log(userObj);

// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// input.addEventListener("input", () => {
//     localStorage.setItem("input",input.value);
// });

const array1 = [1, 3, 4, 5, 6, 7, 8]
const array2 = [100, 300, 700, 1000]

// function cuontSumArray(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
        
//         sum += arr[i] 
//     }
//     return sum
// }



// function countMultArray(array) {
//     let mult = 1
//     for (let i = 0; i < array.length; i++) {
//         mult *= array[i]
        
//     }
//     return mult
// }
// console.log(countMultArray(array1));

// const array6 = [3, 7, 8, 9, 10, 30, 37]

// const numb = 10
// const numb2 = 11
// function elementExists(arr, el) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(el)) {
//             console.log('this number exists');
//           } else {
//             console.log('this number  not exists');
//           }

        
//     }
// }

// console.log(elementExists(array6, numb))
// console.log(elementExists(array6, numb2))


const arr =[1, 2, 3, 4, 5]
function reverseArray(array) {
    return array.reverse();
  }
  
  
  const reversedArr = reverseArray(arr);
  console.log(reversedArr);
  