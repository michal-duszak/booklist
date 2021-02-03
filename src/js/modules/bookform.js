export default class Bookform {
  constructor() {    
    this.title;
    this.author;
    this.category;
    this.priority;
    this.tableBody = document.querySelector('.table-body')
  }
  getNewBookData() {
      const newBook = {};
      newBook.title = document.querySelector('.form__title').value;
      newBook.author = document.querySelector('.form__author').value;
      newBook.category = document.querySelector('.form__category').value;
      newBook.priority = document.querySelector('.form__priority').value;
      return newBook;
  }
}
