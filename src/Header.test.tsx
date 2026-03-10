import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"
import { test, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { Operation } from "./types/Operation";

describe("Header UI Test", () => {
    test("Header light theme initial", () => {
        const handleClick = vi.fn();
        render(<Header value={Operation.ModExponentiation} setValue={handleClick}/>)

        const darkTheme = screen.queryByTestId("moon");
        const lightTheme = screen.queryByTestId("sun");

        expect(darkTheme).toBeInTheDocument();
        expect(lightTheme).not.toBeInTheDocument();

    })

    test("Header menu toggling", async () => {
        const handleClick = vi.fn();
        const {rerender} = render(<Header value={Operation.GCD} setValue={handleClick}/>)

        const modInverse = screen.getByLabelText("module Inverse");
        await userEvent.click(modInverse);
        expect(handleClick).toHaveBeenCalledWith(Operation.ModInverse);

        rerender(<Header value={Operation.ModInverse} setValue={handleClick}/>)

        const modExponentiation = screen.getByLabelText("module Exponentiation");
        await userEvent.click(modExponentiation);
        expect(handleClick).toHaveBeenCalledWith(Operation.ModExponentiation);

        rerender(<Header value={Operation.ModExponentiation} setValue={handleClick}/>)
        
        const gcd = screen.getByLabelText("GCD");
        await userEvent.click(gcd);

        expect(handleClick).toHaveBeenCalledWith(Operation.GCD);

        expect(handleClick).toHaveBeenCalledTimes(3);

    })    
});