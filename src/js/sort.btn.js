import { getBooksFromLocalstorage } from "./localstorage";
import { displayBooks } from "./books";

const list = document.querySelector(".table__list");
const sortBtns = document.querySelectorAll(".table__icon");

sortBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const booksList = getBooksFromLocalstorage("books");
    const sortAttritube = btn.getAttribute("name");
    const isSelected = JSON.parse(btn.getAttribute("selected"));

    booksList.sort((a, b) =>
      isSelected
        ? a[sortAttritube].localeCompare(b[sortAttritube])
        : b[sortAttritube].localeCompare(a[sortAttritube])
    );

    btn.setAttribute("selected", !isSelected);
    displayBooks(list, booksList);
  });
});
