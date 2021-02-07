import * as mdb from 'mdb-ui-kit';
import { initialData as defaultData } from '../data/initialData';
import Bookshelf from './modules/bookshelf';
import Bookform from './modules/bookform';

const form = document.querySelector('.form');
const title = document.querySelector('th[data-sort=title]');
const author = document.querySelector('th[data-sort=author]');
const category = document.querySelector('th[data-sort=category]');
const priority = document.querySelector('th[data-sort=priority]');


/// INIT
let initialData;
if (!localStorage.getItem('data')) {
  initialData = defaultData;
} else {
  initialData = JSON.parse(localStorage.getItem('data'));
}
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();
bookshelf.insertBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookshelf.addBook(bookform.getNewBookData());
  form.reset();
});

title.addEventListener('click', (e) => {
bookshelf.clearShelf();
bookshelf.sortByTitle();
bookshelf.insertBooks();
})
  author.addEventListener('click', (e) => {
bookshelf.clearShelf();
bookshelf.sortByAuthor();
bookshelf.insertBooks();
})
category.addEventListener('click', (e) => {
bookshelf.clearShelf();
bookshelf.sortByCategory();
bookshelf.insertBooks();
})
priority.addEventListener('click', (e) => {
bookshelf.clearShelf();
bookshelf.sortByPriority();
bookshelf.insertBooks();
})
bookshelf.handleCategoriesListToggle();

export default {
  mdb,
};
