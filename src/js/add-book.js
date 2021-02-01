const title = document.querySelector(".form__title");
const author = document.querySelector(".form__author");
const category = document.querySelector(".form__category");
const priority = document.querySelector(".form__priority");
const form = document.querySelector(".form");
export const addBook = () => {

const newBook = {
    title: title.value,
    author: author.value,
    category: category.value,
    priority: priority.value,
}
return newBook;
}