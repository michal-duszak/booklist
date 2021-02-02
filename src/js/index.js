import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
///INIT
const bookshelf = new Bookshelf(initialData);
const bookform = new Bookform();

bookshelf.insertBooks();
bookform.submitBook(bookshelf);
///
export default {
  mdb,
};
