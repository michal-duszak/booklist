export default class Bookshelf {
  constructor(data = {}) {
      this.table = document.querySelector('.table-body'),
      (this.books = data),
      (this.filteredBooks = this.books),
      (this.counter = document.querySelectorAll('.counter')),
      (this.authors = []),
      (this.categories = [
        {
          name: "Kryminał",
          count: 0, 
      },
      {
          name: "Nauki ścisłe",
          count: 0,
      },
      {
          name: "Dramat",
          count: 0,
      },
      {
          name: "Poezja",
          count: 0,
      },
      {
          name: "Fantasy",
          count: 0,
      },
      {
          name: "Sci-fi",
          count: 0,
      },
      ]);
  }
  insertBooks(books = this.filteredBooks) {
    this.clearShelf();
    books.forEach((book) => {
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
      `<td>${book.author}</td>
          <td>${book.title}</td>
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
      
    if(this.filteredBooks[0].category == book.category) {
        this.filteredBooks = this.filterByCategory(book.category);

    }
    this.updateAuthors();
    this.updateCategories();
    this.counter.forEach(x => x.textContent = this.books.length);
    this.table.appendChild(newBook);
  }
  deleteBook(bookId) {
    const bookOnShelf = document.querySelector(`tr[data-id="${bookId}"]`);
    const ind = this.books.findIndex((x) => x._id == bookId);
    bookOnShelf ? this.table.removeChild(bookOnShelf) : '';
    ind != -1 ? this.books.splice(ind, 1) : '';
    this.counter.forEach(x => x.textContent = this.books.length);
          this.updateAuthors();
    this.updateCategories();
    localStorage.setItem("data", JSON.stringify(this.books));
  }
  clearShelf() {
    this.table.innerHTML = "";
  }
  sortByTitle() {
    if(document.querySelector('th[data-sort=title]').getAttribute('sorted')) {
    this.filteredBooks.sort((a,b) => 
    (a.title > b.title) ? -1 : 
    ((b.title > a.title) ? 1 : 
    0))
    document.querySelector('th[data-sort=title]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=title]').setAttribute("sorted", "sorted")
    this.filteredBooks.sort((a,b) => 
    (a.title > b.title) ? 1 : 
    ((b.title > a.title) ? -1 : 
    0))
    }

  }
  sortByAuthor() {
    if(document.querySelector('th[data-sort=author]').getAttribute('sorted')) {
    this.filteredBooks.sort((a,b) => 
    (a.author > b.author) ? -1 : 
    ((b.author > a.author) ? 1 : 
    0))
    document.querySelector('th[data-sort=author]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=author]').setAttribute("sorted", "sorted")
    this.filteredBooks.sort((a,b) => 
    (a.author > b.author) ? 1 : 
    ((b.author > a.author) ? -1 : 
    0))
    }

  }
  sortByCategory() {
    if(document.querySelector('th[data-sort=category]').getAttribute('sorted')) {
    this.filteredBooks.sort((a,b) => 
    (a.category > b.category) ? -1 : 
    ((b.category > a.category) ? 1 : 
    0))
    document.querySelector('th[data-sort=category]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=category]').setAttribute("sorted", "sorted")
    this.filteredBooks.sort((a,b) => 
    (a.category > b.category) ? 1 : 
    ((b.category > a.category) ? -1 : 
    0))
    }
  }
  sortByPriority() {
    if(document.querySelector('th[data-sort=priority]').getAttribute('sorted')) {
    this.filteredBooks.sort((a,b) => 
    (a.priority > b.priority) ? -1 : 
    ((b.priority > a.priority) ? 1 : 
    0))
    document.querySelector('th[data-sort=priority]').removeAttribute("sorted")
    } else {
    document.querySelector('th[data-sort=priority]').setAttribute("sorted", "sorted")
    this.filteredBooks.sort((a,b) => 
    (a.priority > b.priority) ? 1 : 
    ((b.priority > a.priority) ? -1 : 
    0))
    }
  }
  updateCategories() {
  document.querySelector(".categories-list").innerHTML = "";
    this.categories.forEach(x => {
      x.count = 0;
    })
    this.books.forEach(x => {
      if (this.categories.find((c) => c.name == x.category)) {
        this.categories.find((c) => c.name == x.category).count = this.categories.find((c) => c.name == x.category).count + 1;
      }
      });
      this.categories.forEach(x => {
      this.addCategoryToList(x);
      this.handleCategoryFilter();

    })
  }
  updateAuthors() {
    const tempAuthors = {};
    this.books.forEach(x => tempAuthors[x.author] = 1);
    this.authors = Object.keys(tempAuthors)
    console.log(this.authors)
  }
  addCategoryToList(category) {
  const el = document.createElement('li');
  el.classList.add("list-group-item", "list-group-item-action", "category-filter");
  el.setAttribute("data-category", category.name);
  el.innerText = `${category.name}: ${category.count} pozycji`;
  document.querySelector(".categories-list").appendChild(el);
  }
  handleCategoriesListToggle() {
    document.querySelector(".sidebar-categories").addEventListener("click", () => {
      document.querySelector(".categories-list").classList.toggle("hidden");
    })
  }
  handleCategoryFilter() {
    const categories = document.querySelectorAll(`.category-filter`);
    categories.forEach(x => {
      x.addEventListener('click', (e) => {
        this.filteredBooks = this.filterByCategory(x.getAttribute("data-category"));
        this.insertBooks(this.filteredBooks);
      })
    })
  }
  filterByCategory(category) {
    const filtered = this.books.filter(book => book.category == category);
    return filtered;
  }
  handleShowAllCategories() {
    document.querySelector(".sidebar-categories--show").addEventListener("click", () => {
      this.filteredBooks = this.books;
      this.insertBooks();
    })
  }

}
