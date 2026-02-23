const isValuesValid = (firstDigit: number | "", modulo: number | "") => {
    return typeof firstDigit === "number" && typeof modulo === "number"
} 

export const calculate = (firstDigit: number | "", modulo: number | "") => {
        if(!isValuesValid(firstDigit, modulo)) return;

        let a : number  = firstDigit as number;
        const b = modulo as number;
        a %= b;
        for (let x = 1; x < b; x++) {
            if ((a*x)%b == 1) {
                return x;
            }
        }
    }

