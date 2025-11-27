export interface Book {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export const PLACEHOLDER_IMAGE = "https://placehold.co/600x400";

export const INITIAL_DATA: Book[] = [
  {
    id: "1",
    title: "Title 1",
    description: "The Title ONE book is an incredible book.",
    imageUrl: "https://cataas.com/cat",
  },
  {
    id: "2",
    title: "Title 2",
    description: "The Title TWO book is an incredible book.",
  },
  {
    id: "3",
    title: "Title 3",
    imageUrl: "https://cataas.com/cat",
  },
];
