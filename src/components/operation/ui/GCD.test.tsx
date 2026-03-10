import "@testing-library/jest-dom";
import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from '@vitest/browser/context';
import { GCD } from "./GCD";

describe("GCD UI Test", () => {
    const user = userEvent.setup();

    test("GCD should display the correct result", async () => {
        render(<GCD />);
        const firstDigit = screen.getByPlaceholderText("17");
        const secondDigit = screen.getByPlaceholderText("13");
        const result = screen.queryByTestId("result");

        await user.type(firstDigit, "24");
        await user.type(secondDigit, "48");
        expect(result).toHaveTextContent("24");

    })
});