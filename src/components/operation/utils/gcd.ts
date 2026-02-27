import { isValuesValid } from "./is-values-valid";


export const gcd = (a: number | any, b: number | any) => {
    if(!isValuesValid(a, b)) return null;

    let x = a as number;
    let y = b as number;

    while (y) {
        const t = y;
        y = x % y;
        x = t;
    }
    return Math.abs(x);
}