const form = document.getElementById('form-idea');
const nameUser = document.getElementById('inputName')
const title = document.getElementById('inputTitle');
const description = document.getElementById('description');
const category = document.getElementById('category');
const containerCardsIdeas = document.getElementById('container-card-idea');

let ideas = JSON.parse(localStorage.getItem('list-ideas')) || [];

form.addEventListener('submit', createIdea);
document.addEventListener('DOMContentLoaded', renderIdeas);

function createIdea(e) {
    e.preventDefault();

    if (!title.value || !description.value) return;

    const idea = {
        id: Date.now(),
        name: nameUser.value,
        title: title.value,
        description: description.value,
        category: category.value
    };

    ideas.push(idea);
    saveStorage();
    renderIdeas();
    form.reset();
}

function renderIdeas() {
    containerCardsIdeas.innerHTML = "";

    ideas.forEach(idea => {
        const card = document.createElement('div');
        card.classList.add('card-idea');

        card.innerHTML = `
            <div class="user">
                <img src="./../../user.png" alt="">
                <div>
                    <h2>${idea.name}</h2>
                    <span>Ahora mismo</span>
                </div>
            </div>

            <div class="etiq">
                <img src="./../../etiqueta.png" style="width: 1rem;" alt=""><span>${idea.category}</span></img>
            </div>

            <div>
                <h1>${idea.title}</h1><br>
                <hr>   
            </div>

            <div class="paragraf-card">
                <p>${idea.description}</p>
            </div>

            <button data-id="${idea.id}" class="delete-btn">Eliminar</button>
        `;

        containerCardsIdeas.appendChild(card);
    });
}

function saveStorage() {
    localStorage.setItem('list-ideas', JSON.stringify(ideas));
}