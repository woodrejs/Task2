import { displayBooks } from "./books";
import { getBooksFromLocalstorage } from "./localstorage";

const list = document.querySelector(".table__list");
const booksList = getBooksFromLocalstorage("books");

window.onload = displayBooks(list, booksList);
