import { isValuesValid } from "./is-values-valid";

export const calculate = (firstDigit: number | "", modulo: number | "") => {
        if(!isValuesValid(firstDigit, modulo)) return null;

        let a : number  = firstDigit as number;
        const b = modulo as number;
        a %= b;
        for (let x = 1; x < b; x++) {
            if ((a*x)%b == 1) {
                return x;
            }
        }
        return null;
    }

