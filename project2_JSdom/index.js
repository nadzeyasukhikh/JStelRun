const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");
const usersCard = document.createElement("div");

// function generateCard(userData, array) {
//   for (let i = 0; i < array.length; i++) {
//     const p = document.createElement("p");
//     p.innerText = array[i].value;
//     usersCard.append(p);
//   }
// }
// const userData = {
//     name: "Bob",
//     id: 354415,
//     phoneNumber: 32165151
//   }
//   // keys, values, entries
  
//   const userData = {
//     name: "Bob",
//     id: 354415,
//     phoneNumber: 32165151
//   }
  
  
  
//   const userDataKeys = Object.keys(userData);
//   const userDataValues = Object.values(userData)
//   const userDataAll = Object.entries(userData)
  
//   console.log(userDataAll);

// for(a in userData) {
//   console.log(userData[a]);
// }

// function generateCard(userData) {
//     const arrOfKeys = Object.keys(userData);
//     const arrOfValues = Object.values(userData);
//     for (let i = 0; i < arrOfKeys.length; i++) {
        
//         const p = document.createElement("p");
//         usersCard.append(p);
//         p.innerText = arrOfKeys[i] + ':' + " " +arrOfValues[i];
//     }

// }

function generateCard(userData) {
    const arrOfEntries = Object.entries(userData);
  
    for (let i = 0; i < arrOfEntries.length; i++) {
      const p = document.createElement("p");
      usersCard.append(p);
      p.innerText = arrOfEntries[i][0] + ": " + arrOfEntries[i][1];
    }
  }

btn.addEventListener("click", () => {
  let userInfo = {};
  for (let i = 0; i < inputs.length; i++) {
    userInfo[`${inputs[i].className}`] = inputs[i].value;
  }
  usersCard.innerHTML = "";

  body.append(usersCard);
  generateCard(userInfo, inputs);
});
