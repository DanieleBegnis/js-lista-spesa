//prendo lista della spesa
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
const shoppingList = document.querySelector('.lista-spesa');
//stampo sulla pagina indvidualmente gli elementi della lista, usando il ciclo for
for(let i = 0; i < list.length; i++) {
    const thisPath = list[i];
    const listItem = `
    <div>
        ${thisPath}
    </div>
    `;
    shoppingList.innerHTML += listItem
}