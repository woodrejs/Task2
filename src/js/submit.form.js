import { v4 as uuidv4 } from "uuid";
import { displayBook } from "./books.handlers";
import { addBookToLocalstorage } from "./localstorage.handlers";
import { handleRemoveBookBtns } from "./remove.btn";
import { validateForm } from "./yup.validation";

const form = document.getElementById("form");
const messageNode = document.querySelector(".form__message");
const list = document.querySelector(".table__list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const book = getFormData(e);
  const isValid = await validateForm(book, messageNode);

  if (!isValid) return;

  //add new book to localstorage books list
  const { index } = addBookToLocalstorage("books", book);
  //display new book in html list
  displayBook(list, book, index);
  //apply click listeners on remove book btns
  handleRemoveBookBtns(list);
  //clear form
  form.reset();
});

function getFormData(e) {
  const formData = new FormData(e.target);
  return { ...Object.fromEntries(formData), id: uuidv4() };
}
