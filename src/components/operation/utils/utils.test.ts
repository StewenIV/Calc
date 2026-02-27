import { test, expect, describe } from "@jest/globals";
import { calculate as calculateExponentiation } from "./mod-exponentiation";
import { calculate as calculateInverse } from "./mod-inverse";
import { getDividers } from "./get-dividers";
import { gcd } from "./gcd";

describe("modular exponentiation", () => {
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
});


describe("modular inverse", () => {
    test("calculates modular inverse", () => {
        expect(calculateInverse(17, 13)).toBe(10);
    });

    test("calculates modular inverse", () => {
        expect(calculateInverse(27, 10)).toBe(3);
    });

    test("calculates modular inverse with error", () => {
        expect(calculateInverse(4, 6)).toBeNull();
    });

});


describe("get dividers", () => {
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

    test("calculates dividers with prime number", () => {
        expect(getDividers(146)).toEqual([2, 73]);
    });

})


describe("gcd", () => {
    test("calculates gcd", () => {
        expect(gcd(48, 18)).toBe(6);
        expect(gcd(56, 98)).toBe(14);
        expect(gcd(101, 10)).toBe(1); 
        expect(gcd(216, 48)).toBe(24);
    });

    test("calculates gcd with one number being one", () => {
        expect(gcd(1, 5)).toBe(1);
    });

    test("calculates gcd with prime numbers", () => {
        expect(gcd(13, 17)).toBe(1);
    });

    test("calculates gcd with one number being zero", () => {
        expect(gcd(0, 5)).toBe(5);
    });

    test("calculates gcd with both numbers being zero", () => {
        expect(gcd(0, 0)).toBe(0);
    });

    test("calculates gcd with negative numbers", () => {
        expect(gcd(-48, -18)).toBe(6);
    });
})

