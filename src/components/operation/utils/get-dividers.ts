import { isValuesValid } from "./is-values-valid"
import { mod } from "./mod";


export const getDividers = (a: number | any) => {
    if(!isValuesValid(a)) return null;

    const dividers : number[] = [];
    let changable = a;
    let divider = 2;
    while(changable != 1){
        if(mod(changable, divider) === 0){
            dividers.push(divider);
            changable /= divider;
        } else {
            if(divider < Math.floor(Math.sqrt(changable)))
                divider++
            else {
                dividers.push(changable)
                break;
            }
        }
    }
    return dividers;
} 