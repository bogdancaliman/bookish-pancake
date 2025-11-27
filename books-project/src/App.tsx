import "./App.css";
import { INITIAL_DATA } from "./lib/books";
import { useBookLibrary } from "./hooks/useBookLibrary";

import { BookCard } from "./components/BookCard";

function App() {
  const { books, addBook } = useBookLibrary(INITIAL_DATA);

  return (
    <section className="font-sans max-w-[800px] mx-auto p-5">
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-4xl">Library Inventory</h1>
        <button
          onClick={addBook}
          className="px-4 py-2 bg-blue-600 active:bg-blue-800 hover:bg-blue-700 text-white rounded cursor-pointer text-base"
        >
          Add New Book
        </button>
      </header>

      <div className="flex flex-col gap-4">
        <ul>
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
