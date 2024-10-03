const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `By ${book.author}`;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(bookPages);

        const bookRead = document.createElement('p');
        bookRead.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookCard.appendChild(bookRead);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.dataset.index = index;
        removeBtn.addEventListener('click', removeBook);
        bookCard.appendChild(removeBtn);

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.dataset.index = index;
        toggleReadBtn.addEventListener('click', toggleBookRead);
        bookCard.appendChild(toggleReadBtn);

        bookList.appendChild(bookCard);
    });
}

function removeBook(event) {
    const index = event.target.dataset.index;
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleBookRead(event) {
    const index = event.target.dataset.index;
    myLibrary[index].toggleRead();
    displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('new-book-form').style.display = 'block';
});

document.getElementById('new-book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    document.getElementById('new-book-form').style.display = 'none';
});