export function getBooksFromLocalstorage(name) {
  const booksJSON = window.localStorage.getItem(name);
  return JSON.parse(booksJSON);
}
export function addBookToLocalstorage(name, book) {
  const booksList = getBooksFromLocalstorage(name) || [];
  const newBooksList = [...booksList, book];
  const booksJSON = JSON.stringify(newBooksList);

  window.localStorage.setItem(name, booksJSON);
  return { index: newBooksList.length - 1 };
}
export function addBooksToLocalstorage(name, books) {
  const booksJSON = JSON.stringify(books);
  window.localStorage.setItem(name, booksJSON);
}
export function removeBookFromLocalstorage(node, name) {
  const booksList = getBooksFromLocalstorage(name);
  const id = node.getAttribute("name");

  const newBooksList = booksList.filter((book) => book.id !== id);

  addBooksToLocalstorage(name, newBooksList);

  return { newBooksList };
}
