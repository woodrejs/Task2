import { getBooksFromLocalstorage } from "./localstorage.handlers";
import { displayBooks } from "./books.handlers";
import { handleRemoveBookBtns } from "./remove.btn";
import gsap from "gsap";

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
    handleRemoveBookBtns(list);
  });
  btn.addEventListener(
    "mouseover",
    () => gsap.to(btn, { duration: 0.2, scale: 1.3 }),
    true
  );
  btn.addEventListener("mouseout", () => gsap.to(btn, { duration: 0.2, scale: 1 }), true);
});
