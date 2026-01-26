export function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || []
}

export function setUsers(users) {
    localStorage.setItem("users", JSON.stringify(users))
}

export function setLoggedUser(user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user))
}

export function getLoggedUser() {
    return JSON.parse(sessionStorage.getItem("loggedUser"))
}

export function deleteLoggedUser() {
    sessionStorage.removeItem("loggedUser")
}

