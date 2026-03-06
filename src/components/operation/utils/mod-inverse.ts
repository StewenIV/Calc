import { isValuesValid } from "./is-values-valid";
import { mod } from "./mod";

export const calculate = (firstDigit: number | string, modulo: number | string) => {
        if(!isValuesValid(firstDigit, modulo)) return null;
        firstDigit = +firstDigit;
        modulo = +modulo;


        let a : number  = firstDigit as number;
        const b = modulo as number;
        a = mod(a, b);
        for (let x = 1; x < b; x++) {
            if (mod(a*x, b) === 1) { 
                return x;
            }
        }
        return null;
    }

