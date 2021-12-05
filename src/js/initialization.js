import { displayBooks } from "./books.handlers";
import { getBooksFromLocalstorage } from "./localstorage.handlers";
import { handleRemoveBookBtns } from "./remove.btn";

const list = document.querySelector(".table__list");
const booksList = getBooksFromLocalstorage("books");

window.onload = () => {
  displayBooks(list, booksList);
  handleRemoveBookBtns(list);
};
