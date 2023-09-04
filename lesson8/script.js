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

const URLPosts = "https://jsonplaceholder.typicode.com/posts";


fetch(URLPosts).then((data) => {
  return data.json();
}).then((response) => {
  console.log(response);
})

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const fetchButton = document.getElementById('fetchButton');
const errorDiv = document.getElementById('error');
const postsContainer = document.getElementById('postsContainer');

fetchButton.addEventListener('click', fetchPosts);

function fetchPosts() {
    errorDiv.textContent = '';
    postsContainer.innerHTML = ''; 

    const number1 = parseInt(input1.value, 10);
    const number2 = parseInt(input2.value, 10);

    if (isNaN(number1) || isNaN(number2)) {
        errorDiv.textContent = 'Введите корректные числа.';
        return;
    }

    if (number1 > number2) {
        errorDiv.textContent = 'Первое число должно быть меньше второго.';
        return;
    }

    if (number2 > 100) {
        fetchPostsFromAPI();
        errorDiv.textContent = 'Второе число не должно превышать 100.';
        return;
    }

    fetchPostsFromAPI();
}

function fetchPostsFromAPI() {
    fetch(URLPosts)
        .then(response => response.json())
        .then(allPosts => {
            const start = parseInt(input1.value, 10);
            const end = parseInt(input2.value, 10);

            const selectedPosts = allPosts.filter(post => post.id >= start && post.id <= end);
            
            displayPosts(selectedPosts);
        })
        .catch(error => {
            console.log("Ошибка при получении данных:", error);
        });
}

function displayPosts(posts) {
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'postCard';
        postCard.innerHTML = `
        
        <h3>${post.id}</h3>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            
        `;
        postsContainer.appendChild(postCard);
    });
}