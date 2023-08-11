// const mainBox = document.querySelector(".box");
// const info = document.querySelector('#info');
// const link = document.querySelector("a");


// if (window.visualViewport.width < 350) {
//     info.style.backgroundColor = "green";
//     info.style.fontSize = "45px";
//     console.log(info);
//   }


//   const boxes = document.querySelectorAll(".box");

// for (let i = 0; i < boxes.length; i++) {
//   console.log(boxes[i]);
// }

// const ch = document.querySelector(".ch");
// ch.style.backgroundColor = "green";

// const info = document.querySelector("p")

// info.setAttribute("class", "info");


// const body = document.querySelector("body");
// const container = document.createElement("div");
// const info = document.createElement("p");


// body.appendChild(container);
// container.appendChild(p);

// info.innerText = "hello world";


// const num1 = prompt("Enter you messege: ");
// console.log(num1);

const body = document.querySelector("body");
const main = document.createElement("div");
const info = document.createElement("p");

body.append(main, info);
info.innerText = "Your element is: ";

const element = prompt("Enter your element: ");

if (element === "p" || element === "a") {
  const text = prompt("text: p");
}

const result = document.createElement(element);

body.prepend(result);

info.innerText += result.nodeName;