import { useState } from "react";
import "./App.css";

interface Book {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400";

const INITIAL_DATA: Book[] = [
  {
    id: "1",
    title: "Title ONE",
    description: "The Title ONE book is an incredible book.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: "2",
    title: "Title TWO",
    description: "The Title TWO book is an incredible book.",
  },
  {
    id: "3",
    title: "Title THREE",
    imageUrl: "https://placehold.co/600x400",
  },
];

const useBookLibrary = (initalBooks: Book[]) => {
  const [books, setBooks] = useState<Book[]>(initalBooks);

  const addBook = () => {
    const newBook: Book = {
      id: Date.now().toString(),
      title: `New Book ${books.length + 1}`,
      description:
        Math.random() > 0.5
          ? "This is a new description for this book"
          : undefined,
      imageUrl:
        Math.random() > 0.5 ? "https://placehold.co/600x400" : "invalid-url",
    };

    setBooks((prev) => [...prev, newBook]);
  };

  return { books, addBook };
};

function App() {
  const { books, addBook } = useBookLibrary(INITIAL_DATA);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div>
          <button onClick={addBook}>Add New Book</button>
        </div>
        <div className="flex flex-col gap-4">
          {books.map((book) => (
            <div key={book.id}>
              <h2 className="text-2xl">{book.title}</h2>
              {book.description && (
                <p className="text-gray-600">{book.description}</p>
              )}
              <img src={book.imageUrl || PLACEHOLDER_IMAGE} alt={book.title} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
