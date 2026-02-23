const isValuesValid = (firstDigit: number | "", secondDigit: number | "", modulo: number | "") => {
    return typeof firstDigit === "number" && typeof secondDigit === "number" && typeof modulo === "number"
} 

// right-to-left binary method
export const calculate = (firstDigit: number | "", secondDigit: number | "", modulo: number | "") => { 
        if (!isValuesValid(firstDigit, secondDigit, modulo)) return null;

        let result = 1
        let base = (firstDigit as number) % (modulo as number) 
        let exponent = secondDigit

        while ((exponent as number) > 0) {
            if ((exponent as number) % 2 == 1)
                result = (result * base) % (modulo as number)

            base = (base * base) % (modulo as number)
            exponent = Math.floor((exponent as number) / 2)
            
        }

        return result        
    }