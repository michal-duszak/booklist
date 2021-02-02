export default class Bookform {
  constructor() {
    this.form = document.querySelector('.form');
    this.title;
    this.author;
    this.category;
    this.priority;
    this.tableBody = document.querySelector('.table-body')
  }
  submitBook(targetBookshelf) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newBook = {};
      newBook.title = document.querySelector('.form__title').value;
      newBook.author = document.querySelector('.form__author').value;
      newBook.category = document.querySelector('.form__category').value;
      newBook.priority = document.querySelector('.form__priority').value;
      targetBookshelf.books = [...targetBookshelf.books, newBook];
      targetBookshelf.addBook(newBook);
      this.form.reset();
    });
  }
}
