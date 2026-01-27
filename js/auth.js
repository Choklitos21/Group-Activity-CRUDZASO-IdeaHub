


let users = JSON.parse(localStorage.getItem("users")) || [];
let message = document.querySelector(".message");

// funcion para register
function register(name,email,password) {

    let exists = users.some(user=>user.email === email);
    
    
    if (exists) {
        message.textContent = "There is already an account with that email";
        message.style.color = "red";
        setTimeout(()=>{ message.textContent = ""},2000)
        form.reset();
        return;
    }

    users.push({name,email,password});
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "account created successfully";
        message.style.color = "green";
        setTimeout(()=>{ message.textContent = ""},3000)
        form.reset();


}
let form = document.getElementById("registerForm");
// evento para registrar
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let name = document.getElementById("the-name").value.trim();
    let email = document.getElementById("the-email").value.trim();
    let password = document.getElementById("the-password").value.trim();

    register(name,email,password);


})