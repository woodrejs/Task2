export function getBooksFromLocalstorage(name) {
  const booksJSON = window.localStorage.getItem(name);
  return JSON.parse(booksJSON);
}
export function addBookToLocalStorage(name, book) {
  const booksList = getBooksFromLocalstorage(name) || [];
  const newBooksList = [...booksList, book];
  const booksJSON = JSON.stringify(newBooksList);

  window.localStorage.setItem(name, booksJSON);
  return { index: newBooksList.length - 1 };
}
function removeBookFromLocalStorage(name) {
  const booksList = getBooksFromLocalstorage(name);
}
