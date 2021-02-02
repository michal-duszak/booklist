export default class Bookshelf {
  constructor(data = {}) {
    (this.table = document.querySelector('.table-body')), (this.books = data);
  }
  insertBooks() {
    this.books.forEach((book) => {
      this.table.insertAdjacentHTML(
        'afterend',
        `<tr>
          <td class="book-title">${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.priority}</td>
          <td><div class="actions">
          <button type="button" class="btn btn-floating">
            <i class="fas fa-trash delete"></i>
            </button>
          </div>
        </td>
        </tr>`
      );
    });
  }
  addBook(book) {
    this.table.insertAdjacentHTML(
        'beforeend',
        `<tr>
          <td class="book-title">${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.priority}</td>
          <td><div class="actions">
            <i class="fas fa-trash delete"></i>
          </div>
        </td>
        </tr>`
      );
  }
}
