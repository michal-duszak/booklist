import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
const form = document.querySelector('.form');
///INIT
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();
bookshelf.insertBooks();
const deleteButton = document.querySelectorAll('.delete');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bookshelf.addBook(bookform.getNewBookData());
  form.reset();
})
deleteButton.forEach((x) => {
  x.addEventListener('click', (e) => {
    const bookId = e.target.getAttribute("data-id")
    bookshelf.deleteBook(bookId);
    console.log(`DELETING BOOK WITH ID OF: ${bookId}`)
  })
})
///
export default {
  mdb,
};
