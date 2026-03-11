import "@testing-library/jest-dom";
import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ModExponentiation } from "./ModExponentiation";
import { userEvent } from '@vitest/browser/context';

describe("Mod exponentiation UI Test", () => {
    const user = userEvent.setup();

    test("Mod exponentiation result should be empty initially", () => {
        render(<ModExponentiation />);
        const result = screen.queryByTestId("result");
        expect(result).toBeEmptyDOMElement();

        // screen.debug();
    });
    test("Mod exponentiation second digit should be -1", async () => {
        render(<ModExponentiation />);
        const secondDigit = screen.getByPlaceholderText("1");
        await user.type(secondDigit, "-1");
        expect(secondDigit).toHaveValue("-1")
    });    
    
    test("Mod exponentiation should display the correct result", async () => {
        render(<ModExponentiation />);
        const firstDigit = screen.getByPlaceholderText("17");
        const modulo = screen.getByPlaceholderText("13");
        const secondDigit = screen.getByPlaceholderText("1");
        const result = screen.queryByTestId("result");

        await user.type(firstDigit, "13");
        await user.type(modulo, "51");
        await user.type(secondDigit, "-1");
        
        expect(result).toHaveTextContent("4");

    })
});