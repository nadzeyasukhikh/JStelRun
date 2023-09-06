import { fetchUserByUsernameAndEmail } from "./fetchFunction.js";
import { author, verify } from "./variables.js";

let authorizedUser;

export function authorize() {
    const usernameValue = document.querySelector('#username').value;
    const emailValue = document.querySelector('#email').value;

    fetchUserByUsernameAndEmail(usernameValue, emailValue)
        .then(users => {
            if (users && users.length > 0) {
                authorizedUser = users[0];
                document.querySelector('#authForm').style.display = 'none';
                document.querySelector('#companyForm').style.display = 'block';
            } else {
                alert('User not found!');
            }
        });
}

export function verifyCompany() {
    const companyName = document.querySelector('#companyName').value;
    companyName === authorizedUser.company.name ? alert('Вы успешно вошли!') : alert('Incorrect company name!')
}

author.addEventListener("click", authorize);
verify.addEventListener("click", verifyCompany);