import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import { addBook } from '../js/fill-table';
const tableBody = document.querySelector(".table-body");

addBook(tableBody, initialData)

export default {
  mdb,
};
