const inputName = document.querySelector(".name");
const inputPhonNumber = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const requiredPar = document.createElement("p");

const users = localStorage.getItem("users") 
 ? JSON.parse(localStorage.getItem("users"))
  : [] ;

signUpBtn.addEventListener("click", () => {

    if(
        inputName.value === "" ||
        inputPhonNumber.value === "" ||
        inputEmail.value === "" ||
        inputPassword.value === ""
        ) {
           
           requiredPar.innerText = "All inputs are reguired";
           requiredPar.style.color ="#f1c3c3";
        } else {

            let isError = false;

             for(let i = 0; i < users.length; i++) {
               if(users[i].email === inputEmail.value) {
                isError = true
               }
             }

            if(isError) {
                requiredPar.innerText = "User with such email is alredy exists!";
                requiredPar.style.color ="#f1c3c3";
        } else {

    const userData = {
        name: inputName.value,
        phoneNumber: inputPhonNumber.value,
        email: inputEmail.value,
        password: inputPassword.value
    };
    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    inputName.value = "";
    inputPhonNumber.value = "";
    inputEmail.value = "";
    inputPassword.value = "";

    requiredPar.innerText = "You have been registered";
    requiredPar.style.color = "#f0e6e6"
        }
        }
        document.body.appendChild(requiredPar);
        
        
    
});

