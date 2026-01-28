// ---- FUNCTION CHANGE THEME
function ChangeTheme() {

    const content = document.getElementById('ideas-principal_container');
    const contentfilter = document.getElementById('filter-principal-container');
    const contentfilterCards = document.getElementById('container-ideas');

    content.classList.toggle('dark')
    contentfilter.classList.toggle('dark')
    contentfilterCards.classList.toggle('dark')
}

// --------------------- // ---------------------
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
                <div class="user-perfil">
                    <img src="./../../user.png" alt="">
                    <div>
                        <h2>${idea.name}</h2>
                        <span>Ahora mismo</span>
                    </div>
                </div>
                <div>
                    <button data-id="${idea.id}" class="delete-btn"><img class="delete-idea" src="./../../borrar.png" alt=""></button>
                </div>
            </div>
            <div class="etiq">
                <img src="./../../etiqueta.png" style="width: 1rem;" alt=""><span>${idea.category}</span></img>
            </div>
            <div class="paragraf-card">
                ${idea.description}
            </div>
            <hr>
            <div class="like">
                <img src="./../../like.png" style="width: 1rem;" alt=""><span>12</span></img>
            </div>`

        containerCardsIdeas.appendChild(card);
    });
}

function saveStorage() {
    localStorage.setItem('list-ideas', JSON.stringify(ideas));
}

// --------- ELIMINAR CARD DESDE LA IMAGEN DE PAPELERA 
containerCardsIdeas.addEventListener('click', (event) => {
  const btn = event.target.closest('.delete-btn');

  if (!btn || !confirm('¿Eliminar esta tarjeta?')) return;

  const id = btn.dataset.id;
  ideas = ideas.filter(idea => idea.id != id);

  saveStorage();
  btn.closest('.card-idea').remove();
});




