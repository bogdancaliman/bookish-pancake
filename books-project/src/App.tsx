// import { ReactNode } from "react";
import "./App.css";
import { INITIAL_DATA } from "./lib/books";
import { useBookLibrary } from "./hooks/useBookLibrary";
// import { useToggle } from "./hooks/useToggle";
// import { useImageFallback } from "./hooks/useImageFallbacl";
import { BookCard } from "./components/BookCard";

// const Card = ({ children }: { children: ReactNode }) => {
//   return <li className="flex border rounded-lg p-4 mb-4 gap-5">{children}</li>;
// };

// const CardColumn = ({ children }: { children: ReactNode }) => {
//   return <div className="flex flex-col flex-1 gap-2">{children}</div>;
// };

// const CoverImage = ({ src, alt }: { src?: string; alt: string }) => {
//   const { hasError, onLoad, onError, showFallbackMessage } = useImageFallback();
//   const finalSrc = !src || hasError ? PLACEHOLDER_IMAGE : src;

//   return (
//     <div className="shrink-0">
//       <img
//         src={finalSrc}
//         alt={alt}
//         onLoad={onLoad}
//         onError={onError}
//         className="w-[200px] h-[150px] object-cover rounded bg-stone-50"
//       />
//       {showFallbackMessage && (
//         <span className="text-sm text-red-500 mt-1">
//           Image failed to load - showing placeholder
//         </span>
//       )}
//     </div>
//   );
// };

// const Title = ({ children }: { children: ReactNode }) => {
//   return <h3 className="m-0 text-xl">{children}</h3>;
// };

// const DescriptionText = ({ text }: { text: string }) => (
//   <p className="m-0 leading-relaxed text-gray-600">{text}</p>
// );

// const EmptyState = ({ message }: { message: string }) => <span>{message}</span>;

// const Collapsible = ({
//   children,
//   labelId,
// }: {
//   children: ReactNode;
//   labelId: string;
// }) => {
//   const { isOpen, toogle } = useToggle();

//   if (!children) return null;

//   return (
//     <div>
//       <button
//         className="flex items-center gap-1 bg-none border-none text-blue-600 p-0 cursor-pointer text-left text-sm "
//         onClick={toogle}
//         aria-expanded={isOpen}
//         aria-controls={labelId}
//       >
//         {isOpen ? "Hide" : "Show"} Description
//       </button>
//       {isOpen && <div id={labelId}>{children}</div>}
//     </div>
//   );
// };

function App() {
  const { books, addBook } = useBookLibrary(INITIAL_DATA);

  return (
    <section className="font-sans max-w-[800px] mx-auto p-5">
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Library Inventory</h1>
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
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
