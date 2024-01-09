interface Book {
    id: number;
    title: string;
    subtitle?: string;
}

export function fullTitle(book: Book): string {
    if (book.title === "") {
        throw new Error("Book title cannot be empty");
    }
    
    if (book.subtitle) {
        return `${book.title}: ${book.subtitle}`;
    }
    
    return book.title;
}