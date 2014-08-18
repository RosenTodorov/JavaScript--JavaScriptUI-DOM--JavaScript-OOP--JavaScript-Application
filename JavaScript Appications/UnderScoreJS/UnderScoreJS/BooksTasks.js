function GetBooks() {
    var books = [];

    function Book(name, author) {
        this.name = name;
        this.author = author;
    }

    var book1 = new Book('Lord of the rings', 'J.R.R. Tolkien');
    var book2 = new Book('Lord of the rings', 'J.R.R. Tolkien');
    var book3 = new Book('Harry Potter and the Philospopher`s Stone', ' J. K. Rowling');
    var book4 = new Book('Harry Potter and the Chamber of Secrets', ' J. K. Rowling');
    var book5 = new Book('Harry Potter and the Prisoner of Azkaban', ' J. K. Rowling');
    var book6 = new Book('Harry Potter and the Goblet of Fire', ' J. K. Rowling');
    var book7 = new Book('Harry Potter and the Order of the Phoenix', ' J. K. Rowling');
    var book8 = new Book('Harry Potter and the Half-Blood Prince', ' J. K. Rowling');
    var book9 = new Book('Harry Potter and the Deathly Hallows', ' J. K. Rowling');
    var book10 = new Book('The Kite Runner', ' Khaled Hosseini');

    books.push(book1, book10, book2, book3, book4, book5, book6, book7, book8, book9);

    return books;
}
function show(book) {
    console.log('Name: ' + book.name + ' Author: ' + book.author);
}

function ShowBooks() {
    var books = GetBooks();
    _.each(books, function (book) {
        show(book);
    });
}

function findMostPopularAuthor(books) {
    var res = _.countBy(books, 'author'),
     maxIndex = _.max(res),
     maxAuthor = _.invert(res)[maxIndex];

    console.log(maxAuthor + ' with ' + maxIndex + ' books in the collection.');
}

console.log('The books are:');
ShowBooks();
console.log('\nTASK6: The author with the biggest number of books is:');
findMostPopularAuthor(GetBooks());
