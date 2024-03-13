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
//stampo sulla pagina indvidualmente gli elementi della lista, usando il ciclo while

let i = 0;
while(i < list.length) {
    const thisPath = list[i];
    const listItem = `
    <div>
        ${thisPath}
    </div>
    `;
    shoppingList.innerHTML += listItem
    i++;
}




