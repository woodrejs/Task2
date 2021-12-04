import { v4 as uuidv4 } from "uuid";
import { displayBook } from "./books";
import { addBookToLocalStorage } from "./localstorage";

const form = document.getElementById("form");
const message = document.querySelector(".form__message");
const list = document.querySelector(".table__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = { ...Object.fromEntries(formData), id: uuidv4() };
  const { title, author, categories, priority } = book;
  let infoText = null;

  //validation
  if (!title.length) infoText = "*Tytuł musi mieć conajmniej 1 znak.";
  if (author.length < 3) infoText = "*Nazwa autora musi mieć conajmniej 3 znaki.";
  if (!priority || priority < 1 || priority > 5)
    infoText = "*Priorytet musi zawierać się między 1-5.";
  if (
    categories !== "fantastyka" &&
    categories !== "historia" &&
    categories !== "romanse"
  )
    infoText = "*Pole zawiera niepoprawną kategorię.";

  if (infoText) return (message.textContent = infoText);

  //add new book to localstorage books list
  const { index } = addBookToLocalStorage("books", book);
  //display new book in html list
  displayBook(list, book, index);
  //clear form
  clearForm(form, message);
});

function clearForm(form, node) {
  form.reset();
  node.textContent = "*Pozycja została dodana.";
}

//function validateBook() {}

//tmp
const removeBtn = document.querySelectorAll(".table__remove");
removeBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log("dzial");
  })
);
