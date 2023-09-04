// function fetchData(userData) {
//     return new Promise((res, rej) => {
//       res(userData);
//     });
//   }
  
//   fetchData("hello").then((data) => {}, (err) => {});


// function fetchData(userData) {
//     return new Promise((res, rej) => {
//       rej(userData);
//     });
//   }
  
//   Promise.all([
//     fetchData("Hello"),
//     fetchData("name"),
//     fetchData("adderss"),
//     fetchData("city"),
//   ]).then(
//     (data) => {
//       console.log(data);
//     },
//     (err) => {
//       console.log(new Error(err));
//     }
//   );

// const URLPosts = "https://jsonplaceholder.typicode.com/posts/1";

// const URLTodos = "https://jsonplaceholder.typicode.com/todos/1";

// const URLUsers = "https://jsonplaceholder.typicode.com/users/1";

// const fetchBtn = document.querySelector("button");

// fetchBtn.addEventListener("click", () => {
//   Promise.allSettled([fetch(URLPosts), fetch(URLTodos), fetch(URLUsers)])
//     .then((data) => {
//       return data.map((el) => {
//         return el.value.json();
//       });
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



// const URLPosts = "https://jsonplaceholder.typicode.com/posts";


// fetch(URLPosts).then((data) => {
//   return data.json();
// }).then((response) => {
//   console.log(response);
// })

// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');
// const fetchButton = document.querySelector('#fetchButton');
// const errorDiv = document.querySelector('#error');
// const postsContainer = document.querySelector('#postsContainer');

// fetchButton.addEventListener('click', fetchPosts);

// function fetchPosts() {
//     errorDiv.textContent = '';
//     postsContainer.innerHTML = ''; 

//     const number1 = input1.value;
//     const number2 = input2.value;

//     isNaN(number1) || isNaN(number2)
//     ? (errorDiv.textContent = 'Введите корректные числа.')
//     : number1 > number2
//         ? (errorDiv.textContent = 'Первое число должно быть меньше второго.')
//         : number2 > 100
//             ? (fetchPostsFromAPI(), errorDiv.textContent = 'Второе число не должно превышать 100.')
//             : number1 < 0 || number2 < 0
//             ? (errorDiv.textContent = 'Числа не должны быть отрицательными')
//             : null;
//     fetchPostsFromAPI();
// }

// function fetchPostsFromAPI() {
//     fetch(URLPosts)
//         .then(response => response.json())
//         .then(allPosts => {
//             const start = input1.value;
//             const end = input2.value;

//             const selectedPosts = allPosts.filter(post => post.id >= start && post.id <= end);
            
//             displayPosts(selectedPosts);
//         })
//         .catch(error => {
//             console.log("Ошибка при получении данных:", error);
//         });
// }

// function displayPosts(posts) {
//     posts.forEach(post => {
//         const postCard = document.createElement('div');
//         postCard.className = 'postCard';
//         postCard.innerHTML = `
        
//         <h3>${post.id}</h3>
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
            
//         `;
//         postsContainer.appendChild(postCard);
//     });
// }

// fetchBtn.addEventListener("click", () => {
//     fetch(URLPhotos + "?postId=1&id=1")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   });
//   const URLPhotos = "https://jsonplaceholder.typicode.com/comments";
  
//   const fetchBtn = document.querySelector("button");



  const URLUsers = "https://jsonplaceholder.typicode.com/users"
  fetch(URLUsers).then((data) => {
  return data.json();
}).then((response) => {
  console.log(response);
})
const author = document.querySelector(".author");
const verify = document.querySelector(".verify");

author.addEventListener("click", authorize);
verify.addEventListener("click", verifyCompany);


function authorize() {
    const usernameValue = document.querySelector('#username').value;
    const emailValue = document.querySelector('#email').value;

    fetch(URLUsers)
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === usernameValue && user.email === emailValue);
            if (user) {
                authorizedUser = user;
                document.querySelector('#authForm').style.display = 'none';
                document.querySelector('#companyForm').style.display = 'block';
            } else {
                alert('User not found!');
            }
        });
}

function verifyCompany() {
    const companyName = document.querySelector('#companyName').value;
    companyName === authorizedUser.name ? alert('Вы успешно вошли!') : alert('Incorrect company name!')
        
    
}
