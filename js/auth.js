let users = JSON.parse(localStorage.getItem("users")) || [];
let message = document.querySelector(".message");
let form = document.getElementById("registerForm");
let theForm = document.querySelector(".the-form");

// eventos
if(form){form.addEventListener("submit", register)};  
if(theForm){theForm.addEventListener("submit", login)}

// funcion para register
function register(e) {
    e.preventDefault()
    let name = document.getElementById("the-name").value.trim();
    let email = document.getElementById("the-email").value.trim();
    let password = document.getElementById("the-password").value.trim();


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
function login(e) {
    e.preventDefault();
    let emailInput = document.querySelector(".email123").value.trim();
    let passwordInput = document.querySelector(".password123").value.trim();


    let userFound = users.find(user=> user.email === emailInput && user.password === passwordInput )

    if (!userFound) {
        message.textContent = "invalid data";
        message.style.color = "red";
        setTimeout(()=>{message.textContent = ""},2000)
        theForm.reset();
        return;
    }

    message.textContent = "successful login";
    message.style.color = "green";
    setTimeout(()=>{message.textContent = "";
        window.location.href = "#"},2000);
        theForm.reset();

    sessionStorage.setItem("loggedUser",emailInput);

}




