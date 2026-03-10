import "@testing-library/jest-dom";
import { userEvent } from '@vitest/browser/context';
import { test, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { Operation } from "./types/Operation";

describe("Header UI Test", () => {
    const user = userEvent.setup();

    test("Header light theme initial", () => {
        const handleClick = vi.fn();
        render(<Header value={Operation.ModExponentiation} setValue={handleClick}/>)

        const darkTheme = screen.queryByTestId("sun");
        const lightTheme = screen.queryByTestId("moon");

        expect(darkTheme).not.toBeInTheDocument();
        expect(lightTheme).toBeInTheDocument();

    })

    test("Header menu toggling", async () => {
        const handleClick = vi.fn();
        const {rerender} = render(<Header value={Operation.GCD} setValue={handleClick}/>)

        const modInverse = screen.getByLabelText("module Inverse");
        await user.click(modInverse);
        expect(handleClick).toHaveBeenCalledWith(Operation.ModInverse);

        rerender(<Header value={Operation.ModInverse} setValue={handleClick}/>)

        const modExponentiation = screen.getByLabelText("module Exponentiation");
        await user.click(modExponentiation);
        expect(handleClick).toHaveBeenCalledWith(Operation.ModExponentiation);

        rerender(<Header value={Operation.ModExponentiation} setValue={handleClick}/>)
        
        const gcd = screen.getByLabelText("GCD");
        await user.click(gcd);

        expect(handleClick).toHaveBeenCalledWith(Operation.GCD);

        expect(handleClick).toHaveBeenCalledTimes(3);

    })    
});