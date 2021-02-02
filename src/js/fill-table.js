const newBook = (book) => {
  return `<tr>
    <td class="book-title">${book.title}</td>
    <td>
      ${book.author}
    </td>
    <td>${book.category}</td>
    <td>${book.priority}</td>
    <td><div class="actions">
      <i class="fas fa-trash delete"></i>
    </div>
  </td>
  </tr>`;
};
export const buildTable = (table, books) => {
  books.forEach((book) => {
    console.log(book);
    newBook(book);
    table.insertAdjacentHTML('afterend', newBook(book));
  });
};

export const buildNewBook = (bookshelf, book) => {
  bookshelf.insertAdjacentHTML('afterend', newBook(book));
};
