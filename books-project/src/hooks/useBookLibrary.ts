import { useState } from "react";
import type { Book } from "../lib/books";

export const useBookLibrary = (initalBooks: Book[]) => {
  const [books, setBooks] = useState<Book[]>(initalBooks);

  const addBook = () => {
    const newBook: Book = {
      id: Date.now().toString(),
      title: `New Book ${books.length + 1}`,
      description:
        Math.random() > 0.5
          ? "This is a new description for this book"
          : undefined,
      imageUrl: Math.random() > 0.5 ? "https://cataas.com/cat" : "invalid-url",
    };

    setBooks((prev) => [...prev, newBook]);
  };

  return { books, addBook };
};
