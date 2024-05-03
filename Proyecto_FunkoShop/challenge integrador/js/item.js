const add = document.querySelectorAll('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.query('#quantity');

add.addEvenListener('click', () => quantity.value = quantity.value + 1);
subtract.addEvenListener('click', () => quantity.value = quantity.value - 1);