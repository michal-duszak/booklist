import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import { buildNewBook, buildTable } from '../js/fill-table';
import { addBook } from '../js/add-book';
const tableBody = document.querySelector(".table-body");
const addBookForm = document.querySelector(".form");
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  buildNewBook(tableBody, addBook())
  addBookForm.reset()
})
buildTable(tableBody, initialData)

export default {
  mdb,
};
