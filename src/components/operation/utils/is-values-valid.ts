export const isValuesValid = (...nums : (number | "")[]) => {
    return nums.every(num => typeof num === "number" && !isNaN(num))
} 