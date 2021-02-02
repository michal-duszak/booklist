export default class Bookform {
  constructor() {
    this.form = document.querySelector('.form');
    this.title = document.querySelector('.form__title').value;
    this.author = document.querySelector('.form__author').value;
    this.category = document.querySelector('.form__category').value;
    this.priority = document.querySelector('.form__priority').value;
    this.tableBody = document.querySelector('.table-body')
  }
  handleSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.title = document.querySelector('.form__title').value;
      this.author = document.querySelector('.form__author').value;
      this.category = document.querySelector('.form__category').value;
      this.priority = document.querySelector('.form__priority').value;
      this.tableBody.insertAdjacentHTML(
        'afterend',
        `<tr>
    <td class="book-title">${this.title}</td>
    <td>
      ${this.author}
    </td>
    <td>${this.category}</td>
    <td>${this.priority}</td>
    <td><div class="actions">
      <i class="fas fa-trash delete"></i>
    </div>
  </td>
  </tr>`
      );
      this.form.reset();
    });
  }
}
