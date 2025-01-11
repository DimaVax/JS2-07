import makeTemplateUsers from "./templates/users.hbs";
import makeSortedUsers from "./templates/sorted-users.hbs"
import { users } from "./users.js";

const box = document.querySelector('.box');
const btn = document.querySelector('.btn')

const templateUsers = makeTemplateUsers({ users });

box.innerHTML = templateUsers;

btn.addEventListener('click', () => {
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    const sortedUsersHTML = makeSortedUsers({ sortedUsers });
    box.innerHTML = sortedUsersHTML
    // console.log(sortedUsers);
})