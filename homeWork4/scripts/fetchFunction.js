import { URLUsers } from "./env.js";

export function fetchUserByUsernameAndEmail(username, email) {
    const fetchURL = `${URLUsers}/?username=${username}&email=${email}`;
    return fetch(fetchURL).then(response => response.json());
}