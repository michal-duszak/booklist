import * as mdb from 'mdb-ui-kit';
import { initialData as defaultData } from '../data/initialData';
import Bookshelf from './modules/bookshelf';
import Bookform from './modules/bookform';

const form = document.querySelector('.form');
/// INIT
let initialData;
if (!localStorage.getItem('data')) {
  initialData = defaultData;
} else {
  initialData = JSON.parse(localStorage.getItem('data'));
}
// initialData = defaultData
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();
bookshelf.insertBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookshelf.addBook(bookform.getNewBookData());
  form.reset();
});

export default {
  mdb,
};
