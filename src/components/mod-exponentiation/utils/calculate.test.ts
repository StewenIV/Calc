import { test, expect } from "@jest/globals";
import { calculate } from "./calculate";

test("calculates modular exponentiation with positive base", () => {
    expect(calculate(27, 11, 7)).toBe(6);
});


test("calculates modular exponentiation with negative base", () => {
    expect(calculate(-27, 4, 7)).toBe(1);
});


test("calculates modular exponentiation with zero exponent", () => {
    expect(calculate(27, 0, 7)).toBe(1);
});


test("calculates modular exponentiation with no values", () => {
    expect(calculate("", "", 3)).toBeNull();
});

test("calculates modular exponentiation with big values", () => {
    expect(calculate(1000000, 1000000, 13)).toBe(1);
});