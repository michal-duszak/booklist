import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import { buildNewBook } from '../js/fill-table';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
const tableBody = document.querySelector(".table-body")
const bookshelf = new Bookshelf(initialData);
bookshelf.insertBooks()
const bookform = new Bookform();
bookform.handleSubmit()
const addBookForm = document.querySelector(".form");

export default {
  mdb,
};
