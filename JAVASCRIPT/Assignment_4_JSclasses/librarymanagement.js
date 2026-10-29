
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`${this.title} has been issued successfully.`);
        }
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} is already available.`);
        } else {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Learn Java", "James Gosling", "102"),
    new Book("Web Development", "David Miller", "103")
];

// Display available books
function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books available.");
        return;
    }

    availableBooks.forEach(book => {
        console.log(
            `${book.title} | ${book.author} | ISBN: ${book.ISBN}`
        );
    });
}

// Search and issue a book using ISBN
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();
