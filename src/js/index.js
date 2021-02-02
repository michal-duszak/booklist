import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import { buildNewBook, buildTable } from '../js/fill-table';
import { addBook } from '../js/add-book';
import Bookshelf from "./modules/bookshelf";
const bookshelf = new Bookshelf(initialData);
bookshelf.insertBooks()
const tableBody = document.querySelector(".table-body");
const addBookForm = document.querySelector(".form");
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  buildNewBook(tableBody, addBook())
  addBookForm.reset()
})

export default {
  mdb,
};
