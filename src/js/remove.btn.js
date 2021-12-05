import { removeBookFromLocalstorage } from "./localstorage.handlers";
import { displayBooks } from "./books.handlers";
import gsap from "gsap";

export function handleRemoveBookBtns(node) {
  const removeBtns = document.querySelectorAll(".table__remove");

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const { newBooksList } = removeBookFromLocalstorage(btn, "books");
      displayBooks(node, newBooksList);
      //apply listeners again
      handleRemoveBookBtns(node);
    });
    btn.addEventListener(
      "mouseover",
      () => gsap.to(btn, { duration: 0.2, scale: 1.3 }),
      true
    );
    btn.addEventListener(
      "mouseout",
      () => gsap.to(btn, { duration: 0.2, scale: 1 }),
      true
    );
  });
}
