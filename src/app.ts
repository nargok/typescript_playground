import { Item } from './item';
const elem = document.getElementById('output');
const aBook = new Item('new book', 1998);
const bBook = new Item('old book', 1880);
aBook.say(elem);
bBook.say(elem);

console.log('ooo');
