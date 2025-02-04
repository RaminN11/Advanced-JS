class Library {
    #books = [];

    get allBooks() {
        return [...this.#books];
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга ${title} уже есть в библотеке.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error(`${title} - нет в нашей библиотеке.`)
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length){
            throw new Error("Начальный список содержит дубликаты!");
        }
        this.#books = [...initialBooks];
    }
}

try {
    // const myLibrary = new Library(['Капитанская дочь', 'Капитанская дочь', 'Горе от ума', 'Война и мир']);
    const myLibrary = new Library(['Капитанская дочь', 'Горе от ума', 'Война и мир']);
    console.log(myLibrary.allBooks); 

    myLibrary.addBook("Бедная Лиза");
    console.log(myLibrary.allBooks); 

    console.log(myLibrary.hasBook("Бедная Лиза"));
    myLibrary.removeBook("Бедная Лиза");
    console.log(myLibrary.hasBook("Бедная Лиза"));

    myLibrary.addBook("Капитанская дочь");
} catch (error) {
    console.error("Ошибка:", error.message);
}

