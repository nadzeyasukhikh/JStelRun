// function sayHi() {
//     return "hi"
//   }


// const obj = {
//   sayHi() {
//     return "hi"
//   }
// }

// sayHi() // - function


// obj.sayHi() // - method

// const box = document.querySelector("div");


// box.style.padding ="20px";
// box.style.backgroundColor = "teal"
// box.setAttribute("id", "main");

// const box = document.createElement("div");
// const body = document.querySelector("body");

// body.append(box);


// const box = document.querySelector("#main");

// box.addEventListener("mouseover", () => {
// console.log("it was clicked");
// });



// const body = document.querySelector("body");
// const button = document.createElement("button");
// body.append(button);
// button.innerText = "click me";


// button.addEventListener("click", () => {
//     const box = document.createElement("div");
//     body.append(box);
//     box.style.backgroundColor = "teal";
//     box.style.width = "50px";
//     box.style.height = "50px";
// });

// const myInput = document.querySelector(".info");
// const myButton = document.querySelector("button");
// const myText = document.querySelector("p");

// myButton.addEventListener("click", () => {
// const value = myInput.value;
    
// myText.innerText += value;
// });
const body = document.querySelector("body")
const inputName = document.querySelector(".name");
const inputLastName = document.querySelector(".lastname");
const inputPhoneNumber = document.querySelector(".phonenumber");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const saveBtn = document.querySelector(".save");
const info = document.createElement("div");
info.setAttribute("class", "infoall")
body.append(info)

saveBtn.addEventListener("click", () => {
    const userName = inputName.value ;
    info.innerHTML += "<p>" + userName + "</p>";

    const userLastName = inputLastName.value;
    info.innerHTML += "<p>" + userLastName + "</p>";

    const userPhoneNumber = inputPhoneNumber.value;
    info.innerHTML += "<p>" + userPhoneNumber + "</p>";

    const userEmail = inputEmail.value;
    info.innerHTML += "<p>" + userEmail + "</p>";

    const userPassword = inputPassword.value;
    info.innerHTML += "<p>" + userPassword + "</p>";
    });
