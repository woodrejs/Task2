export function createBook(index, book) {
  const { title, author, categories, priority, id } = book;

  return `<div class="table__item">
        <div class="table__cell table__cell--sm">
          <span class="table__text">${index + 1}</span>
        </div>
        <div class="table__cell">
          <span class="table__text">${title}</span>
        </div>
        <div class="table__cell">
          <span class="table__text">${author}</span>
        </div>
        <div class="table__cell">
          <span class="table__text">${categories}</span>
        </div>
        <div class="table__cell table__cell--sm">
          <span class="table__text">${priority}</span>
        </div>
        <div class="table__cell table__cell--sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="table__remove"
            name="${id}"     
          
          >
            <path
              d="M12.9098 12.9099C15.8399 9.97979 15.8399 5.23334 12.9098 2.30327C9.97976 -0.626807 5.23331 -0.626807 2.30323 2.30327C-0.626841 5.23334 -0.626841 9.97979 2.30323 12.9099C5.23331 15.8399 9.97976 15.8399 12.9098 12.9099ZM4.42455 9.72789L6.54587 7.60657L4.42455 5.48525L5.48521 4.42459L7.60653 6.54591L9.72785 4.42459L10.7885 5.48525L8.66719 7.60657L10.7885 9.72789L9.72785 10.7885L7.60653 8.66723L5.48521 10.7885L4.42455 9.72789Z"
              fill="#0A94F1"
            />
          </svg>
        </div>
      </div>`;
}
export function displayBook(node, book, index) {
  node.innerHTML += createBook(index, book);
}
export function displayBooks(node, books) {
  if (!books) return;

  node.innerHTML = "";

  books.map((book, index) => {
    node.innerHTML += createBook(index, book);
  });
}
