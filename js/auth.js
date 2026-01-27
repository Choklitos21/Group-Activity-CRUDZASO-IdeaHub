let form = document.getElementById("registerForm");
let nameInput = document.getElementById("the-name");
let emailInput = document.getElementById("the-email");
let passwordInput = document.getElementById("the-password");


let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let info = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    }

    let p = document.createElement("p");

    let exits = users.some(user=>user.email === info.email);

    form.appendChild(p)
    if (exits) {
        p.textContent = "There is already an account with that email";
        p.style.color = "red";
        form.reset();
        return;
    };
        users.push(info);
        localStorage.setItem("users", JSON.stringify(users));

        p.textContent = "account created successfully";
        p.style.color = "green";
        setTimeout(()=>{ p.textContent = "", window.location.href = "#"},1500)
        form.reset();
        

})