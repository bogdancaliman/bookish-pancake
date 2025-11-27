import { useState, ReactNode } from "react";
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

const useImageFallback = (fallbackUrl: string) => {
  const [hasError, setHasError] = useState(false);
  const onError = () => setHasError(true);

  return { hasError, onError };
};

const Card = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};

const CardColumn = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const CoverImage = ({ src, alt }: { src?: string; alt: string }) => {
  const { hasError, onError } = useImageFallback(PLACEHOLDER_IMAGE);
  const finalSrc = !src || hasError ? PLACEHOLDER_IMAGE : src;

  return (
    <div>
      <img src={finalSrc} alt={alt} onError={onError} />
    </div>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  return <h3>{children}</h3>;
};

const DescriptionText = ({ text }: { text: string }) => <p>(text)</p>;

const EmptyState = ({ message }: { message: string }) => <span>{message}</span>;

function App() {
  const { books, addBook } = useBookLibrary(INITIAL_DATA);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div>
          <button
            onClick={addBook}
            className="px-4 py-2 bg-blue-600 active:bg-blue-800 hover:bg-blue-700 text-white rounded cursor-pointer text-base"
          >
            Add New Book
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <ul>
            {books.map((book) => {
              const descId = `desc-${book.id}`;

              return (
                <Card>
                  <CoverImage
                    src={book.imageUrl}
                    alt={`Cover of ${book.title}`}
                  />
                  <CardColumn>
                    <Title>{book.title}</Title>
                    {book.description ? (
                      <DescriptionText text={book.description} />
                    ) : (
                      <EmptyState message="No description" />
                    )}
                  </CardColumn>
                </Card>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
