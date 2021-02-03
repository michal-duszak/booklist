import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
const form = document.querySelector('.form');
const counter = document.querySelector('.counter');
///INIT
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();
bookshelf.insertBooks();
counter.textContent = bookshelf.books.length;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bookshelf.addBook(bookform.getNewBookData());
  counter.textContent = bookshelf.books.length;
  console.log(bookshelf.books)
  form.reset();
})

export default {
  mdb,
};
