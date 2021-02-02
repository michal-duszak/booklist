import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import Bookshelf from "./modules/bookshelf";
import Bookform from "./modules/bookform";
///INIT
const bookshelf = new Bookshelf(initialData);
bookshelf.insertBooks();
const bookform = new Bookform();
bookform.submitBook(bookshelf);
///
export default {
  mdb,
};
