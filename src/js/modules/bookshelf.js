export default class Bookshelf {
  constructor(data = {}) {
    (this.table = document.querySelector('.table-body')), (this.books = data);
  }
  insertBooks() {
    this.books.forEach((book) => {
      this.table.insertAdjacentHTML(
        'afterend',
        `<tr data-id="${book._id}">
          <td class="book-title">${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.priority}</td>
          <td><div class="actions">
          <button data-id="${book._id}" "type="button" class="btn btn-floating delete">
            <i class="fas fa-trash"></i>
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
          <button type="button" class="btn btn-floating">
            <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
        </tr>`
      ); 
  }
  deleteBook(bookId) {
    const ind = this.books.findIndex(x => x._id == bookId);
    (ind != -1) ? this.books.splice(ind, 1) : "";
    console.log(this.books)
  }
}
