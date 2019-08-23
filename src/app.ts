import { Item } from './item';
import { MainApp } from './MainApp';

const elem = document.getElementById('output');
const aBook = new Item('new book', 1998);
const bBook = new Item('old book', 1880);
aBook.say(elem);
bBook.say(elem);


const h = new MainApp.Hoge();
MainApp.foo();
