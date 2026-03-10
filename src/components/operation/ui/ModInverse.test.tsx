import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"
import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ModInverse } from "./ModInverse";

describe("Mod inverse UI Test", () => {
    test("Mod inverse result should be empty initially", () => {
        render(<ModInverse />);
        const result = screen.queryByTestId("result");
        expect(result).toBeEmptyDOMElement();

        // screen.debug();
    });
    test("Mod inverse second digit should be -1 initially", () => {
        render(<ModInverse />);
        const secondDigit = screen.getByPlaceholderText("1");
        expect(secondDigit).toHaveValue("-1")
    });    
    
    test("Mod inverse should display the correct result", async () => {
        render(<ModInverse />);
        const firstDigit = screen.getByPlaceholderText("17");
        const modulo = screen.getByPlaceholderText("13");
        const result = screen.queryByTestId("result");

        await userEvent.type(firstDigit, "13");
        await userEvent.type(modulo, "51");
        expect(result).toHaveTextContent("4");

    })
});