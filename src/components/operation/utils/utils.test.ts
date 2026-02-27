import { test, expect } from "@jest/globals";
import { calculate as calculateExponentiation } from "./mod-exponentiation";
import { calculate as calculateInverse } from "./mod-inverse";
import { getDividers } from "./get-dividers";

test("calculates modular exponentiation with positive base", () => {
    expect(calculateExponentiation(27, 11, 7)).toBe(6);
});


test("calculates modular exponentiation with negative base", () => {
    expect(calculateExponentiation(-27, 4, 7)).toBe(1);
});


test("calculates modular exponentiation with zero exponent", () => {
    expect(calculateExponentiation(27, 0, 7)).toBe(1);
});


test("calculates modular exponentiation with no values", () => {
    expect(calculateExponentiation("", "", 3)).toBeNull();
});

test("calculates modular exponentiation with big values", () => {
    expect(calculateExponentiation(1000000, 1000000, 13)).toBe(1);
});

test("calculates modular inverse", () => {
    expect(calculateInverse(17, 13)).toBe(10);
});

test("calculates modular inverse", () => {
    expect(calculateInverse(27, 10)).toBe(3);
});

test("calculates modular inverse with error", () => {
    expect(calculateInverse(4, 6)).toBeNull();
});



test("calculates dividers", () => {
    expect(getDividers(12)).toEqual([2, 2, 3]);
});

test("calculates dividers with prime number", () => {
    expect(getDividers(13)).toEqual([13]);
});

test("calculates dividers with 1", () => {
    expect(getDividers(1)).toEqual([]);
});

test("calculates dividers with no value", () => {
    expect(getDividers("")).toBeNull();
});

test("calculates dividers with big value", () => {
    expect(getDividers(1000000)).toEqual([2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5]);
})