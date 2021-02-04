export default class Bookform {
  constructor() {
    this.title = '';
    this.author = '';
    this.category = '';
    this.priority = '';
    this.id = 10;
    this.tableBody = document.querySelector('.table-body');
  }

  setLatestId() {
    if (!localStorage.getItem('latest-id')) {
      localStorage.setItem('latest-id', 10);
    } else {
      this.id = JSON.parse(localStorage.getItem('latest-id'));
      this.id += 1;
      localStorage.setItem('latest-id', this.id);
    }
  }

  getNewBookData() {
    const newBook = {};
    this.setLatestId();
    newBook._id = this.id;
    newBook.title = document.querySelector('.form__title').value;
    newBook.author = document.querySelector('.form__author').value;
    newBook.category = document.querySelector('.form__category').value;
    newBook.priority = document.querySelector('.form__priority').value;
    return newBook;
  }
}
