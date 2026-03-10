export const isValuesValid = (...nums : (number | string)[]) => {
    return nums.every(num => !isNaN(+num) && num !== "" && num !== null);
} 