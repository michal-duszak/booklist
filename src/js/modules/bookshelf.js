export default class Bookshelf {
  constructor(data = {}) {
    (this.table = document.querySelector('.table-body')),
      (this.books = data),
      (this.counter = document.querySelector('.counter'));
  }
  insertBooks() {
    this.books.forEach((book) => {
      this.addBook(book);
    });
  }
  addDeleteListener(el) {
    el.addEventListener('click', (e) => {
      const bookId = e.target.getAttribute('data-id');
      this.deleteBook(bookId);
    });
  }
  addBook(book) {
    const newBook = document.createElement('tr');
    newBook.setAttribute('data-id', book._id);
    newBook.insertAdjacentHTML(
      'beforeend',
      `<td class="book-title">${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.priority}</td>
          <td><div class="actions">
          <button data-id="${book._id}" type="button" class="btn btn-floating delete">
            <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>`
    );
    const deleteButton = newBook.querySelector(`button[data-id="${book._id}"]`);
    this.addDeleteListener(deleteButton);
    if (!this.books.find((b) => b._id == book._id)) {
      this.books = [...this.books, book];
      localStorage.setItem("data", JSON.stringify(this.books));
    }
    this.counter.textContent = this.books.length;
    this.table.appendChild(newBook);
  }
  deleteBook(bookId) {
    const bookOnShelf = document.querySelector(`tr[data-id="${bookId}"]`);
    const ind = this.books.findIndex((x) => x._id == bookId);
    bookOnShelf ? this.table.removeChild(bookOnShelf) : '';
    ind != -1 ? this.books.splice(ind, 1) : '';
    this.counter.textContent = this.books.length;
    localStorage.setItem("data", JSON.stringify(this.books));
  }
}
