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

// ----------------- CREAR IDEA
function createIdea(e) {
    e.preventDefault();

    const idea = {
        id: Date.now(),
        name: nameUser.value,
        title: title.value,
        description: description.value,
        category: category.value,
        like: 0
    };

    ideas.push(idea);
    saveStorage();
    renderIdeas();
    form.reset();
}


// ------------------- MOSTRAR IDEA
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
                    <button data-id="${idea.id}" class="edit-btn"><img class="edit-idea" src="./../../editar-texto.png" alt=""></button>
                </div>
            </div>
            <div class="etiq">
                <img src="./../../etiqueta.png" style="width: 1rem;" alt=""><span>${idea.category}</span></img>
            </div>

            <div class="title">
                <h1>${idea.title}</h1>
            </div>
            <div class="paragraf-card">
                ${idea.description}
            </div>
            <hr>
            <div class="like">
                <img src="./../../like.png" class="like-btn" data-id="${idea.id}" style="width: 1rem;" alt=""><span>${idea.like}</span></img>
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

// ---------------- EDITAR CONTENIDO DE LA CARD

containerCardsIdeas.addEventListener('click', (event) => {
  
    const btn = event.target.closest('.edit-btn');
  if (!btn) return;

  const id = btn.dataset.id;
  const idea = ideas.find(idea => idea.id == id);

  if (!idea) return;

  nameUser.value = idea.name;
  title.value = idea.title;
  description.value = idea.description;
  category.value = idea.category;

  ideas = ideas.filter(idea => idea.id != id);
  saveStorage();

  form.scrollIntoView({ behavior: 'smooth' });
});


// --------- LIKE POR CARD 
containerCardsIdeas.addEventListener('click', (event) => {
    
    const btn = event.target.closest('.like-btn');
    if (!btn) return;

    const id = btn.dataset.id;
    const idea = ideas.find(idea => idea.id == id);
    if (!idea) return;

    idea.like++; 
    saveStorage();
    renderIdeas();
});














