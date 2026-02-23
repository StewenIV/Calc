import { test, expect } from "@jest/globals";
import { calculate } from "./calculate";

test("calculates modular inverse", () => {
    expect(calculate(17, 13)).toBe(10);
});

test("calculates modular inverse", () => {
    expect(calculate(27, 10)).toBe(3);
});

test("calculates modular inverse with error", () => {
    expect(calculate(4, 6)).toBeNull();
});



