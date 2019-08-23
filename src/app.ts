import { Item } from './item';
import { MainApp } from './MainApp';
import { BusinessPerson } from './person';

const elem = document.getElementById('output');
const aBook = new Item('new book', 1998);
const bBook = new Item('old book', 1880);
aBook.say(elem);
bBook.say(elem);


const h = new MainApp.Hoge();
MainApp.foo();

const p = new BusinessPerson('John', '男', '一兵卒');
console.log(p.show());
console.log(p.work());
