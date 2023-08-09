const inputName = document.querySelector(".name");
const inputPhoneNumber = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const requiredPar = document.createElement("p");
const body = document.querySelector("body");

const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

signUpBtn.addEventListener("click", () => {
  if (
    inputName.value === "" ||
    inputPhoneNumber.value === "" ||
    inputEmail.value === "" ||
    inputPassword.value === ""
  ) {
    requiredPar.innerText = "All inputs are required";
    requiredPar.style.color = "#e6d5d5";
  } else {
    let isError = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail.value) {
        isError = true;
      }
    }

    if (isError) {
      requiredPar.innerText = "User with such email is already exists!";
      requiredPar.style.color = "#e6d5d5";
    } else {
      const userData = {
        name: inputName.value,
        phoneNumber: inputPhoneNumber.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };

      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      inputName.value = "";
      inputPhoneNumber.value = "";
      inputEmail.value = "";
      inputPassword.value = "";

      requiredPar.innerText = "You have been registered";
      requiredPar.style.color = "#e6d5d5";
      section.style.display = "none";
      main.style.display = "block"
    }
  }

  document.body.appendChild(requiredPar);
});

// =========================== LOGIN =================================

const loginInputEmail = document.querySelector(".emailLogin");
const loginInputPassword = document.querySelector(".passwordLogin");
const loginBtn = document.querySelector(".login");
const logout = document.querySelector(".logout");
const section = document.querySelector(".authoris");
const main = document.querySelector(".emailPassword");

loginInputEmail.addEventListener("click", () => {
  requiredPar.innerText = "";
});
loginInputPassword.addEventListener("click", () => {
  requiredPar.innerText = "";
});

loginBtn.addEventListener("click", () => {
  let isLoginError = true;

  for (let i = 0; i < users.length; i++) {
    if (
      loginInputEmail.value === users[i].email ||
      loginInputPassword.value === users[i].password
    ) {
      isLoginError = false;
    }
  }

  if (isLoginError) {
    if (loginInputEmail.value === "" || loginInputPassword.value === "") {
      requiredPar.innerText = "You need to fill all fields";
      requiredPar.style.color = "#e6d5d5";
    } else {
      requiredPar.innerText = "You have invalid email or password";
      requiredPar.style.color = "#e6d5d5";
    }
  } else {
    loginInputEmail.value = "";
    loginInputPassword.value = "";
    requiredPar.innerText = "You have been logged in";
    requiredPar.style.color = "#e6d5d5";

    // section.innerHTML = "";
    section.style.display = "none";

    main.style.display = "none";
    logout.style.display = "block";
  }

  document.body.appendChild(requiredPar);
});

// =======================================================

const firstLogIn = document.querySelector(".firstLogIn");
const firstSignUp = document.querySelector(".firstSignUp");
const firstDiv = document.querySelector(".logInSignUp");

firstSignUp.addEventListener("click", () => {
  section.style.display = "block";
  firstDiv.style.display = "none";
});

firstLogIn.addEventListener("click", () => {
  section.style.display = "none";
  firstDiv.style.display = "none";
  main.style.display = "block";
});

// ============================================
const logoutDiv = document.querySelector(".logoutDiv");
logout.addEventListener("click", () => {
  firstDiv.style.display = "flex";
  logout.style.display = "none";
  requiredPar.innerText = " ";
});





