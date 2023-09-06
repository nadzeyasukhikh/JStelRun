

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const userData = {
//     name: "Patric",
//     userID: 45156156,
//     address: {
//       city: "Berlin",
//     },
//     username: "Mike",
//   };

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: {
//       "Content-type": "application/json; charset=utf-8",
//     },
//   });
// });
const url = "https://jsonplaceholder.typicode.com/posts";

const title = document.querySelector("#title").value;
const description = document.querySelector("#description").value;
const price = document.querySelector("#price").value;
const category = document.querySelector("#category").value;
const brand = document.querySelector("#brand").value;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
const product = {
  title: title,
  description: description,
  price: price,
  category: category,
  brand: brand,
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(product),
});
})
    
