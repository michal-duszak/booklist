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
  clearShelf() {
    this.table.innerHTML = "";
  }
  sortByTitle() {
    if(document.querySelector('th[data-sort=title]').getAttribute('sorted')) {
    this.books.sort((a,b) => 
    (a.title > b.title) ? -1 : 
    ((b.title > a.title) ? 1 : 
    0))
    document.querySelector('th[data-sort=title]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=title]').setAttribute("sorted", "sorted")
    this.books.sort((a,b) => 
    (a.title > b.title) ? 1 : 
    ((b.title > a.title) ? -1 : 
    0))
    }

  }
  sortByAuthor() {
    if(document.querySelector('th[data-sort=author]').getAttribute('sorted')) {
    this.books.sort((a,b) => 
    (a.author > b.author) ? -1 : 
    ((b.author > a.author) ? 1 : 
    0))
    document.querySelector('th[data-sort=author]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=author]').setAttribute("sorted", "sorted")
    this.books.sort((a,b) => 
    (a.author > b.author) ? 1 : 
    ((b.author > a.author) ? -1 : 
    0))
    }

  }
  sortByCategory() {
    if(document.querySelector('th[data-sort=category]').getAttribute('sorted')) {
    this.books.sort((a,b) => 
    (a.category > b.category) ? -1 : 
    ((b.category > a.category) ? 1 : 
    0))
    document.querySelector('th[data-sort=category]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=category]').setAttribute("sorted", "sorted")
    this.books.sort((a,b) => 
    (a.category > b.category) ? 1 : 
    ((b.category > a.category) ? -1 : 
    0))
    }
  }
  sortByPriority() {
    if(document.querySelector('th[data-sort=priority]').getAttribute('sorted')) {
    this.books.sort((a,b) => 
    (a.priority > b.priority) ? -1 : 
    ((b.priority > a.priority) ? 1 : 
    0))
    document.querySelector('th[data-sort=priority]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=priority]').setAttribute("sorted", "sorted")
    this.books.sort((a,b) => 
    (a.priority > b.priority) ? 1 : 
    ((b.priority > a.priority) ? -1 : 
    0))
    }

  }
}
