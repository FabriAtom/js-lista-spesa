// Data una lista della spesa, (che vi dovete creare voi)
// stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente

const listaSpesa = [
    'mele',
    'pere',
    'carote',
    'pane',
    'carta',
    'pasta', 
    'cereali',
];

const listaElement = document.querySelector('.lista');
console.log(listaElement);

for(let i = 0; i < listaSpesa.length; i++) {
    const prodotto = listaSpesa [i];
    console.log(prodotto);
    listaElement.innerHTML += '<li> ${prodotto} </li>';
}

const listaWElement = document.querySelector('.lista-w');
let j = 0;

while(j < listaSpesa.lenght){
    const prodotto = listaSpesa[j];
    listaWElement.innerHTML += '<li> ${prodotto} </li>'
    j++;
}
