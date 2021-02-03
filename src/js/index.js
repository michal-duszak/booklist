import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
const form = document.querySelector('.form');
///INIT
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();
bookshelf.insertBooks();
const deleteButtons = document.querySelectorAll('.delete');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bookshelf.addBook(bookform.getNewBookData());
  // deleteButtons = document.querySelectorAll('.delete');
  form.reset();
})

export default {
  mdb,
};
