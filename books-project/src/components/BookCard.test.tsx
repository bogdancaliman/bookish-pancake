import { describe, it, expect } from "vitest";
import {render, screen, fireEvent} from "@testing-library/react"
import { BookCard } from "./BookCard";

describe("BookCard", ()=>{
    it("shows an empty state when there is no description",()=>{
        render(<BookCard title="All About Cats" />)

        expect(screen.getByRole("heading", {name: /all about cats/i})).toBeInTheDocument();

        expect(screen.queryByRole("button", {name: /show description/i})).not.toBeInTheDocument();
    })

    it("toggles the visibility when clicking the button", ()=>{
        const text: string = "A classic book description about cats."

        render(<BookCard title="All About Cats" description={text}/>)

        const toggleButton = screen.getByRole("button", {
            name: /show description/i
        })

        expect(toggleButton).toBeInTheDocument();
        expect(toggleButton).toHaveAttribute("aria-expanded", "false");
        expect(screen.queryByText(text)).not.toBeInTheDocument();

        fireEvent.click(toggleButton)

        expect(toggleButton).toHaveAttribute("aria-expanded", "true")
        expect(toggleButton).toHaveTextContent(/hide description/i)
        expect(screen.getByText(text)).toBeInTheDocument()
    })
})